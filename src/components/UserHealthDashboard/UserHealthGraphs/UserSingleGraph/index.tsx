import { Indicator } from '@/types/entities/indicators.entity';
import LineGraph from '@/components/LineGraph';

export interface UserSingleGraphProps {
  indicator: Indicator;
}

export default function UserSingleGraph({ indicator }: UserSingleGraphProps) {
  return (
    <div className="h-full min-w-96 rounded-lg bg-gray-800 p-2 text-white">
      {indicator.name}
      <LineGraph />
    </div>
  );
}
