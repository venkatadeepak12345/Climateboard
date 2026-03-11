import {
  TrendingUp,
  TrendingDown,
  FileText,
  DollarSign,
  LineChartIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  LineChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
} from "recharts";
import AlertItem from "./Alertsystem";
const climateTargetsData = [
  { year: 2024, targetReduction: 9, actualReduction: 5 },
  { year: 2025, targetReduction: 18, actualReduction: 5 },
  { year: 2026, targetReduction: 27, actualReduction: 5 },
  { year: 2027, targetReduction: 36, actualReduction: 5 },
  { year: 2028, targetReduction: 45, actualReduction: 5 },
];
const investmentData = [
  {
    sector: "Renewable Energy",
    investment: 3.0,      // B AED
    ghgReduction: 1.2,    // tCO₂e
  },
  {
    sector: "Energy Efficiency",
    investment: 0.8,
    ghgReduction: 45,
  },
];
const entityPerformance = [
  {
    rank: 1,
    name: "Dubai Electricity and Water Authority",
    projects: 1,
    avgProgress: 18,
    score: 141,
  },
  {
    rank: 2,
    name: "Masdar",
    projects: 1,
    avgProgress: 38,
    score: 129,
  },
];
export const strategicAlerts = [
  {
    type: "risk",
    title: "High Risk",
    description: "1 projects at risk of missing targets",
  },
  {
    type: "budget",
    title: "Budget Alert",
    description: "34% budget utilization rate",
  },
  {
    type: "opportunity",
    title: "Opportunity",
    description: "Exceeding GHG targets in 0 sectors",
  },
  {
    type: "legacy",
    title: "COP28 Legacy",
    description: "UAE leading by example with 2 active projects",
  },
]
const portfolioMetrics = [
  { value: 2, label: "Total Projects" },
  { value: 2, label: "Active Entities" },
  { value: "34%", label: "Budget Utilization" },
  { value: "50%", label: "Portfolio Health" },
  { value: "0%", label: "Sector Coverage" },
  { value: 131, label: "ROI (tCO₂e / M AED)" },
];
export function ExecutivesDashboard(){
    const navigate=useNavigate();
    const handleview=()=>{
        navigate('/reports');
    }
    const navigates=useNavigate();
    const handleportfoilo=()=>{
        navigates('/project/registry');
    }
    return(
        <div className="flex-1 bg-gray-50 overflow-auto">
            <div className="p-8">
                <div className="flex items-start justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Executive Dashboard</h1>
                        <p className="text-gray-600">Strategic Climate Portfolio Overview</p>
                    </div>
                    <div className="flex gap-4">
                        <button onClick={handleview}  className="flex items-center gap-2 px-2 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transtion-colors">
                            <FileText className="w-4 h-4"/>
                            <span className="text-sm">View Reports</span>
                        </button>
                        <button onClick={handleportfoilo} className="flex items-center gap-3 px-2 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                           
                            <LineChartIcon className="w-4 h-4"/>
                            <span className="text-sm">  Portfolio Details</span>
                        </button>
                   </div>
               </div>
               <div className="grid grid-cols-4 gap-6 mb-8">
  {/* Climate Investment Card */}
  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
    {/* Header */}
    <div className="flex items-center justify-between">
      <h4 className="text-sm font-medium text-gray-600">
        Climate Investment
      </h4>
      <div className="flex items-center text-green-600 text-sm font-medium">
        <TrendingUp className="w-4 h-4 mr-1" />
        +12.5%
      </div>
    </div>
    {/* Value */}
    <div className="mt-4">
      <h2 className="text-3xl font-semibold text-gray-900">
        4.3B <span className="text-lg font-medium text-gray-600">AED</span>
      </h2>
      <p className="text-sm text-gray-500 mt-1">
        Total portfolio value
      </p>
    </div>
  </div>
  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
    {/* Header */}
    <div className="flex items-center justify-between">
      <h4 className="text-sm font-medium text-gray-600">
        GHG Impact
      </h4>
     <div className="flex items-center text-sm font-medium text-green-600">
        <TrendingDown className="w-4 h-4 mr-1" />
        +25%
      </div>
    </div>
    {/* Value */}
    <div className="mt-4">
      <h2 className="text-3xl font-semibold text-gray-900">
        0.6 <span className="text-lg font-medium text-gray-600">M tCO₂e</span>
      </h2>
      <p className="text-sm text-gray-500 mt-1">
        Emissions reduction achieved
      </p>
    </div>
  </div>
  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
    {/* Header */}
    <div className="flex items-center justify-between">
      <h4 className="text-sm font-medium text-gray-600">
      Portfolio Health
      </h4>
      <div className="flex items-center text-green-600 text-sm font-medium">
        <TrendingUp className="w-4 h-4 mr-1" />
        -2.1%
      </div>
    </div>
    {/* Value */}
    <div className="mt-4">
      <h2 className="text-3xl font-semibold text-gray-900">
        50% <span className="text-lg font-medium text-gray-600"></span>
      </h2>
      <p className="text-sm text-gray-500 mt-1">
    Progress On Track
      </p>
    </div>
  </div>
  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
    {/* Header */}
    <div className="flex items-center justify-between">
      <h4 className="text-sm font-medium text-gray-600">
      Strategic Coverage
      </h4>
      <div className="flex items-center text-green-600 text-sm font-medium">
        <TrendingUp className="w-4 h-4 mr-1" />
        0%
      </div>
    </div>
    {/* Value */}
    <div className="mt-4">
      <h2 className="text-3xl font-semibold text-gray-900">
        0/5 <span className="text-lg font-medium text-gray-600"></span>
      </h2>
      <p className="text-sm text-gray-500 mt-1">
    Priority sectors covered
      </p>
    </div>
  </div>
</div>
</div>
<div className="grid grid-cols-2  gap-6">
   <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
    <h3 className="text-sm font-semibold flex items-center gap-2 mb-1">
      ⦿ UAE Climate Targets Progress
    </h3>
    <p className="text-xs text-gray-500 mb-4">
      Progress towards national climate goals and emissions reduction targets
    </p>
    <ResponsiveContainer width="100%" height={260}>
      <LineChart data={climateTargetsData}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="year" tick={{ fontSize: 12 }} />
        <YAxis
          yAxisId="left"
          domain={[0, 100]}
          tick={{ fontSize: 12 }}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          domain={[0, 36]}
          tick={{ fontSize: 12 }}
        />
        <Tooltip />
        <Legend />
        {/* Target Reduction — dashed */}
        <Line
          yAxisId="right"
          dataKey="targetReduction"
          name="Target Reduction"
          stroke="#22c55e"
          strokeDasharray="4 4"
          dot={{ r: 3 }}
        />
        {/* Actual Reduction — solid */}
        <Line
          yAxisId="left"
          dataKey="actualReduction"
          name="Actual Reduction"
          stroke="#16a34a"
          strokeWidth={3}
          dot={{ r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
  {/* RIGHT CARD — STRATEGIC ALERTS */}
  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
    <h3 className="text-sm font-semibold flex items-center gap-2 mb-1">
      ⚠ Strategic Alerts
    </h3>
    <p className="text-xs text-gray-500 mb-4">
      Key risks and opportunities
    </p>
    <div className="space-y-3">
      {strategicAlerts.map((alert, index) => (
        <AlertItem key={index} alert={alert} />
      ))}
    </div>
  </div>
</div>
<div className="grid grid-cols-2 gap-6 mb-8">
          {/* Investment by Sector */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-start gap-2 mb-6">
              <DollarSign className="w-5 h-5 text-gray-700 mt-1" />
              <div>
                <h3 className="text-gray-900 mb-1">Investment by Sector</h3>
                <p className="text-sm text-gray-500">
                  Capital allocation and sector across strategic sectors
                </p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={280}>
  <BarChart data={investmentData}>
    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
    <XAxis
      dataKey="sector"
      tick={{ fill: "#6b7280", fontSize: 11 }}
      axisLine={{ stroke: "#e5e7eb" }}
      angle={-45}
      textAnchor="end"
      height={80}
    />
    {/* LEFT AXIS – Investment */}
    <YAxis
      yAxisId="left"
      tick={{ fill: "#6b7280", fontSize: 12 }}
      axisLine={{ stroke: "#e5e7eb" }}
    />
    {/* RIGHT AXIS – GHG Reduction */}
    <YAxis
      yAxisId="right"
      orientation="right"
      tick={{ fill: "#6b7280", fontSize: 12 }}
      axisLine={{ stroke: "#e5e7eb" }}
    />
    <Tooltip />
    <Legend wrapperStyle={{ paddingTop: "10px" }} iconType="square" />
    {/* Investment Bar */}
    <Bar
      yAxisId="left"
      dataKey="investment"
      fill="#10b981"
      name="Investment (B AED)"
      radius={[4, 4, 0, 0]}
    />
    {/* GHG Reduction Bar */}
    <Bar
      yAxisId="right"
      dataKey="ghgReduction"
      fill="#3b82f6"
      name="GHG Reduction (tCO₂e)"
      radius={[4, 4, 0, 0]}
    />
  </BarChart>
</ResponsiveContainer>
          </div>
          {/* Top Performing Entities */}
           <div className="col-span-2 bg-white rounded-lg p-6 border border-gray-200">
                      <div className="flex items-start gap-2 mb-6">
                        <BarChart className="w-5 h-5 text-gray-700 mt-1" />
                        <div>
                          <h3 className="text-gray-900 mb-1">Entity Performance Ranking</h3>
                          <p className="text-sm text-gray-500">
                            Top performing entities by climate impact efficacy
                          </p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        {entityPerformance.map((entity) => (
                          <div
                            key={entity.rank}
                            className="flex items-center gap-4 pb-4 border-b border-gray-100 last:border-0"
                          >
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                                entity.rank === 1
                                  ? 'bg-amber-100 text-amber-700'
                                  : 'bg-gray-100 text-gray-700'
                              }`}
                            >
                              {entity.rank}
                            </div>
                            <div className="flex-1">
                              <div className="text-sm text-gray-900 mb-1">{entity.name}</div>
                              {/* <div className="text-xs text-gray-500">
                                {entity.programs} programs • {entity.avgProgress}% avg progress
                              </div> */}
                            </div>
                            <div className="text-right">
                              <div className="text-lg text-gray-900">{entity.score}</div>
                              <div className="text-xs text-gray-500">KG/State AED</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm mt-6">
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold flex items-center gap-4">
                      Portfolio Metrics
                      </h3>
                      <p className="text-xs text-gray-500">
                        Comprehensive view of climate portfolio efficiency and impact
                      </p>
                    </div>
                     <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-6 gap-4">
                      {portfolioMetrics.map((metric, index) => (
                        <div
                          key={index}
                          className="bg-gray-50 rounded-lg p-4 flex flex-col items-center"
                        >
                        <p className="text-green-600 text-xl font-bold">
                          {metric.value}
                        </p>
                          <div className="text-sm text-gray-600 mt-1">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                     </div>
                     </div>
                    </div>
)
}
