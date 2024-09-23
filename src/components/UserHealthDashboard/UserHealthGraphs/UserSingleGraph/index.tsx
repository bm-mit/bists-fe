import { Indicator } from '@/types/entities/indicators.entity';
import LineGraph from '@/components/LineGraph';
import { useEffect, useState } from 'react';

export interface UserSingleGraphProps {
  indicator: Indicator;
}

export default function UserSingleGraph({ indicator }: UserSingleGraphProps) {
  const [values, setValues] = useState<number[]>(indicator.values ?? []);

  useEffect(() => {
    const interval = setInterval(() => {
      setValues((prevValues) => [...prevValues, prevValues[0]].slice(-5));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full min-w-96 rounded-lg bg-gray-800 p-2 text-white">
      <LineGraph label={indicator.name} values={values} />
    </div>
  );
}
