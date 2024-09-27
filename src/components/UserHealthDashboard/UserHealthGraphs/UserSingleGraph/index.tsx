import { Indicator } from '@/types/entities/indicators.entity';
import LineGraph from '@/components/LineGraph';

export interface UserSingleGraphProps {
  indicator: Indicator;
}

export default function UserSingleGraph({ indicator }: UserSingleGraphProps) {
  console.log('indi', indicator);
  return (
    <div className="h-full rounded-lg bg-gray-800 p-2 text-white">
      <LineGraph label={indicator.name} values={indicator.values} />
    </div>
  );
}
