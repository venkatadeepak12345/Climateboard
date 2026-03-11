import {
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip
} from "recharts";
import { TrendingUp } from "lucide-react";

const data = [
  { month: "Jan", target: 20, actual: 20 },
  { month: "Feb", target: 25, actual: 25 },
  { month: "Mar", target: 30, actual: 30 },
  { month: "Apr", target: 35, actual: 35 },
  { month: "May", target: 40, actual: 40 },
  { month: "Jun", target: 45, actual: 45 }
];


const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div className="bg-white border border-gray-200 rounded-md p-2 text-xs shadow-sm">
      <div className="font-semibold mb-1">{label}</div>

      {payload.map((item: any, index: number) => (
        <div key={index}>
          Progress : {item.value}%
        </div>
      ))}
    </div>
  );
};


export function ProgressTrendChart() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      {/* Header */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-1">
          <TrendingUp className="w-4 h-4 text-gray-600" />
          <h3 className="text-gray-900 font-semibold">
            Progress Trend
          </h3>
        </div>
        <p className="text-sm text-gray-500">
          Average project progress over time
        </p>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={260}>
        <AreaChart data={data}>
          {/* Gradient */}
          <defs>
            <linearGradient id="actualFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22c55e" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#22c55e" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          {/* Grid */}
          <CartesianGrid strokeDasharray="3 3" />

          {/* X Axis */}
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
          />

          {/* Y Axis */}
          <YAxis
            domain={[0, 100]}
            ticks={[0, 25, 50, 75, 100]}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
          />

      
          <Tooltip
            content={CustomTooltip}
            shared
           
          />

          {/* Target (Dashed Line) */}
          <Line
            type="monotone"
            dataKey="target"
            stroke="#94a3b8"
            strokeDasharray="4 4"
            strokeWidth={2}
            dot={{r:3}}
          />

          {/* Actual (Green Area) */}
          <Area
            type="monotone"
            dataKey="actual"
            stroke="#22c55e"
            strokeWidth={2}
            fill="url(#actualFill)"
            dot={{ r: 3, fill: "#22c55e" }}
            activeDot={{ r: 5 }}
          />
        </AreaChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="flex justify-center gap-6 mt-2 text-xs text-gray-500">
        <div className="flex items-center gap-1">
          <span className="w-3 h-[2px] bg-gray-400 inline-block" />
          Target
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-2 bg-green-500 inline-block rounded-sm" />
          Actual
        </div>
      </div>
    </div>
  );
}
