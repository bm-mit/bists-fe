'use client';

import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export interface LineGraphProps {
  label?: string;
  values?: number[];
}

export default function LineGraph({
  label = undefined,
  values = [],
}: LineGraphProps) {
  const data = values.map((value) => ({ value }));

  return (
    <>
      <p className="text-center">{label}</p>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </>
  );
}
