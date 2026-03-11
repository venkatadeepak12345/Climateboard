import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip
} from "recharts";
import { PieChart as PieChartIcon } from "lucide-react";
import { useState } from "react";
const data = [
  { name: "On Track", value: 50, color: "#10B981" },
  { name: "At Risk", value: 50, color: "#F59E0B" }
];
export function ProjectStatusChart() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <PieChartIcon className="w-4 h-4 text-gray-600" />
            <h3 className="text-gray-900 font-medium">
              Project Status Distribution
            </h3>
          </div>
          <p className="text-sm text-gray-500">
            Current status of all projects
          </p>
        </div>
      </div>
       <div className="relative">
        <ResponsiveContainer width="100%" height={260}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={65}
              outerRadius={100}
              paddingAngle={3}
              activeIndex={activeIndex ?? undefined}
         
              isAnimationActive={true}
              animationBegin={200}
              animationDuration={1200}
              animationEasing="ease-out"
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>

            <Tooltip
              formatter={(value: number, name: string) => [
                `${value}%`,
                name
              ]}
            />
          </PieChart>
        </ResponsiveContainer>

        

       
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-sm"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-xs text-gray-600">
              {item.name}: {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
