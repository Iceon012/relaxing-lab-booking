"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { time: "9:00", value: 8 },
  { time: "10:00", value: 7.8 },
  { time: "11:00", value: 8.3 },
  { time: "12:00", value: 7.5 },
  { time: "13:00", value: 8.2 },
  { time: "14:00", value: 7.8 },
  { time: "15:00", value: 8.4 },
  { time: "16:00", value: 8.1 },
]

export function TimeWorkedChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <XAxis dataKey="time" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  )
}

