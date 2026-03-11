import { LineChart } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Renewable Energy",
    planned: 1500,
    achieved: 450,
  },
  {
    name: "Energy Efficiency",
    planned: 800,
    achieved: 120,
  },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="bg-white border border-gray-200 rounded-md p-3 text-xs shadow-md">
      <div className="font-semibold text-gray-800">{label}</div>
      <div className="text-gray-500">
        Planned : {payload[0]?.value}k tCO₂e
      </div>
      <div className="text-green-600 font-medium">
        Achieved : {payload[1]?.value}k tCO₂e
      </div>
    </div>
  );
};

export function GHGReductionChart() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      {/* Header */}
        <div className="mb-6">
       <div className="mb-6">
  <h3 className="flex items-center gap-2 text-gray-900 font-semibold">
    <LineChart className="w-4 h-4 text-gray-600" />
    GHG Reduction by Sector
  </h3>
</div>
  <p className="text-sm text-gray-500">
          Planned vs Achieved emissions reduction (thousands tCO₂e)
        </p>
      </div>

      <ResponsiveContainer width="100%" height={260}>
        <BarChart
          data={data}
          barGap={8}
          margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#e5e7eb"
          />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            domain={[0, 1600]}
            ticks={[0, 400, 800, 1200, 1600]}
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip content={<CustomTooltip />} />

          {/* Planned */}
         <Bar
  dataKey="planned"
  fill="#bbf7d0"   // light green
  radius={[6, 6, 0, 0]}
  animationDuration={1200}
/>

          {/* Achieved */}
          <Bar
            dataKey="achieved"
            fill="#16a34a"
            radius={[6, 6, 0, 0]}
            animationDuration={1200}
          />
        </BarChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="flex gap-4 justify-center mt-4 text-sm text-gray-600">
  <div className="flex items-center gap-2">
    <span
      className="w-3 h-3 rounded-sm"
      style={{ backgroundColor: "#bbf7d0" }}
    />
    Planned
  </div>
  <div className="flex items-center gap-2">
    <span
      className="w-3 h-3 rounded-sm"
      style={{ backgroundColor: "#16a34a" }}
    />
    Achieved
  </div>
</div>
    </div>
  );
}
