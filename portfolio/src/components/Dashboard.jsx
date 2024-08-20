import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { date: '2022-01-01', stock1: 100, stock2: 140, stock3: 320 },
  { date: '2022-01-02', stock1: 105, stock2: 135, stock3: 135 },
  { date: '2022-01-03', stock1: 140, stock2: 60, stock3: 30 },
  { date: '2022-01-04', stock1: 135, stock2: 165, stock3: 15 },
  { date: '2022-01-05', stock1: 120, stock2: 170, stock3: 130 },
  { date: '2022-01-06', stock1: 145, stock2: 175, stock3: 345 },
];

const Dashboard = () => (
  <ResponsiveContainer width="100%" height={500}>
    <LineChart
      data={data}
      margin={{
        top: 5, right: 50, left: 30, bottom: 10,
      }}
    >
      <CartesianGrid strokeDasharray="10 10" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="stock1" stroke="#0a00c8" />
      <Line type="monotone" dataKey="stock2" stroke="#009338" />
      <Line type="monotone" dataKey="stock3" stroke="#ffaa00" />
    </LineChart>
  </ResponsiveContainer>
);

export default Dashboard;
