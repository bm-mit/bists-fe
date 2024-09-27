import { Client } from '@/types/entities/clients.entity';
import UserSingleGraph from '@/components/UserHealthDashboard/UserHealthGraphs/UserSingleGraph';

export interface UserHealthGraphsProps {
  client: Client;
}

export default function UserHealthGraphs({ client }: UserHealthGraphsProps) {
  return (
    <div className="w-full rounded-xl border border-gray-700 p-4">
      <div className="font-mono font-bold">{client.username}</div>
      <hr className="mb-2" />
      {client.indicators && client.indicators.length ? (
        <div className="flex min-h-32 gap-2 overflow-x-auto">
          {client.indicators?.map((indicator, index) => {
            console.log(indicator);
            return <UserSingleGraph key={index} indicator={indicator} />;
          })}
        </div>
      ) : (
        <p>This client don&apos;t have any indicators</p>
      )}
    </div>
  );
}
