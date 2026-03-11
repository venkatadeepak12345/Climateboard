import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  ReferenceArea
} from "recharts";
import { DollarSign } from "lucide-react";
const data = [
  { name: "Energy Efficiency", value: 0.5 },
  { name: "Renewable Energy", value: 1.0 }
];
const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload || !payload.length) return null;
  return (
    <div className="bg-white border border-gray-200 rounded-md p-2 text-xs shadow-sm">
      <div className="font-semibold">{label}</div>
      <div className="text-green-600">
        Budget : {(payload[0].value * 10).toFixed(1)}B AED
      </div>
    </div>
  );
};
export function BudgetAllocationChart() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <DollarSign className="w-4 h-4 text-gray-600" />
            <h3 className="text-gray-900 font-semibold">
              Budget Allocation by Sector
            </h3>
          </div>
          <p className="text-sm text-gray-500">
            Total Approved Budget (Billions AED)
          </p>
        </div>
      </div>
      {/* Chart */}
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 40, bottom: 20, left: 140 }}
        >
    
          <ReferenceArea
            x1={0}
            x2={1}
            fill="#E5E7EB"
            fillOpacity={1}
          />
          <CartesianGrid horizontal={false} strokeDasharray="3 3" />
          <XAxis
            type="number"
            domain={[0, 1]}
            ticks={[0, 0.25, 0.5, 0.75, 1]}
            tick={{ fill: "#6B7280", fontSize: 12 }}
            axisLine={{ stroke: "#E5E7EB" }}
          />

          {/* Y Axis */}
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fill: "#6B7280", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          {/* Tooltip */}
          <Tooltip content={CustomTooltip} />

     
          <Bar
            dataKey="value"
            fill="#10B981"
            radius={[0, 4, 4, 0]}
            barSize={30}
            isAnimationActive
            animationDuration={1200}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
