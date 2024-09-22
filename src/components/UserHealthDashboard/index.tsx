'use client';

import { useClients } from '@/hooks/useClients';
import UserHealthGraphs from '@/components/UserHealthDashboard/UserHealthGraphs';

export interface UserHealthDashboardProps {}

export default function UserHealthDashboard() {
  const [clients] = useClients();

  return (
    <div className="flex flex-col gap-y-4">
      {clients.map((client) => (
        <UserHealthGraphs client={client} key={client.id} />
      ))}
    </div>
  );
}
