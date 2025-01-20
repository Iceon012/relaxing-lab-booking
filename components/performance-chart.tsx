"use client"

import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { month: "Jan", value: 80 },
  { month: "Feb", value: 85 },
  { month: "Mar", value: 82 },
  { month: "Apr", value: 88 },
  { month: "May", value: 85 },
  { month: "Jun", value: 90 },
  { month: "Jul", value: 92 },
  { month: "Aug", value: 88 },
  { month: "Sep", value: 87 },
  { month: "Oct", value: 91.72 },
  { month: "Nov", value: 89 },
  { month: "Dec", value: 88 },
]

export function PerformanceChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="month" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip />
        <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#colorValue)" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

