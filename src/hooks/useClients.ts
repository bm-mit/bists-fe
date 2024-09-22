'use client';

import { useContext } from 'react';
import { ClientsContext } from '@/contexts/ClientsProvider';

export function useClients() {
  return useContext(ClientsContext);
}
