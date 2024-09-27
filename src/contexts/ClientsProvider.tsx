'use client';

import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Client } from '@/types/entities/clients.entity';
import { API_HOST, SOCKET_HOST } from '@/constants';
import axios from 'axios';
import { io, Socket } from 'socket.io-client';
import { Indicator } from '@/types/entities/indicators.entity';
import { format } from 'date-fns';

export type ClientsContextType = [Client[], Dispatch<SetStateAction<Client[]>>];

export const ClientsContext = createContext<ClientsContextType>([[], () => {}]);

export default function ClientsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [clients, setClients] = useState<Array<Client>>([]);

  useEffect(() => {
    axios
      .get(`${API_HOST}/api/devices`)
      .then((response) =>
        setClients(response.data.map((c: Client) => new Client(c))),
      )
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const socket = io(SOCKET_HOST);
    socket.on('client', (data) => {
      const deviceId = data.device.id;
      const { time } = data;
      const formattedTime = format(new Date(time), 'HH:mm:ss');

      console.log('time', time, new Date(time), formattedTime);

      const client = clients.find((c) => c.id === deviceId);
      if (!client) return;

      Object.keys(data.indicators).forEach((indicator) => {
        const indicatorData = data.indicators[indicator];
        const clientIndicator = client.indicators?.find(
          (i) => i.name === indicator,
        );

        if (!clientIndicator)
          client.indicators.push(
            new Indicator({
              name: indicator,
              values: [{ time: formattedTime, value: indicatorData }],
            }),
          );
        else
          clientIndicator.values.push({
            time: formattedTime,
            value: indicatorData,
          });

        setClients((prev) => {
          for (let i = 0; i < prev.length; i++) {
            if (prev[i].id === deviceId) {
              prev[i] = client;
              break;
            }
          }

          return [...prev];
        });
      });
    });

    return () => {
      socket.close();
    };
  }, [clients]);

  const clientsMemo = useMemo<ClientsContextType>(
    () => [clients, setClients],
    [clients],
  );

  return (
    <ClientsContext.Provider value={clientsMemo}>
      {children}
    </ClientsContext.Provider>
  );
}
