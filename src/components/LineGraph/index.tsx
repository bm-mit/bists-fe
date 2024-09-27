'use client';

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { useEffect, useState } from 'react';

export interface LineGraphProps {
  label?: string;
  values?: { time: string; value: number }[];
}

export default function LineGraph({
  label = undefined,
  values = [],
}: LineGraphProps) {
  values = values.map((v) => ({ ...v })).slice(-100);

  return (
    <>
      <p className="text-center">{label}</p>
      {/* Key forces a full re-render of the LineChart */}
      <LineChart data={values} width={600} height={300}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </>
  );
}
