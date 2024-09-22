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
    { id: 1, name: 'mit', indicators: ['heart rate', 'spo2'] },
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
