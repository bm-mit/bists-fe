'use client';

import {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from 'react';
import { Client } from '@/types/entities/clients.entity';

export type ClientsContextType = [Client[], Dispatch<SetStateAction<Client[]>>];

export const ClientsContext = createContext<ClientsContextType>([[], () => {}]);

export default function ClientsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [clients, setClients] = useState<Array<Client>>([
    {
      id: 1,
      name: 'mit',
      indicators: [
        { id: 1, name: 'heart rate', values: [70, 71, 72, 70, 69, 67, 71] },
        { id: 2, name: 'spo2' },
      ],
    },
    { id: 2, name: 'mit2' },
  ]);

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
