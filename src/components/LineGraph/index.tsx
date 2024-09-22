'use client';

import { useEffect, useState } from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export default function LineGraph() {
  const [data, setData] = useState([
    { time: '12:00', value: 75 },
    { time: '12:01', value: 80 },
    { time: '12:02', value: 78 },
  ]);

  // Simulate real-time data update every second
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString();
      const newValue = Math.floor(Math.random() * 20) + 70;

      setData((prevData) =>
        [...prevData, { time: currentTime, value: newValue }].slice(-10),
      ); // Keep only the last 10 entries
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
    </LineChart>
  );
}
