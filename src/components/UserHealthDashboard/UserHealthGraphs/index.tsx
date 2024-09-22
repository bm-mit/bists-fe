import { Client } from '@/types/entities/clients.entity';
import UserSingleGraph from '@/components/UserHealthDashboard/UserHealthGraphs/UserSingleGraph';

export interface UserHealthGraphsProps {
  client: Client;
}

export default function UserHealthGraphs({ client }: UserHealthGraphsProps) {
  return (
    <div className="w-full rounded-xl border border-gray-700 p-4">
      <div className="font-mono font-bold">{client.name}</div>
      <hr className="mb-2" />
      <p>{!client.indicators && "This client don't have any indicators"}</p>

      <div className="flex h-32 gap-4">
        {client.indicators?.map((indicator, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <UserSingleGraph key={index} indicator={indicator} />
        ))}
      </div>
    </div>
  );
}
