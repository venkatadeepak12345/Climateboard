import { useNavigate } from "react-router-dom";
import { StatsCards } from "./StatsCards";
import { GHGReductionChart } from "./GHGReductionChart";
import { ProjectStatusChart } from "./ProjectStatusChart";
import { ProgressTrendChart } from "./ProgressTrendChart";
import { BudgetAllocationChart } from "./BudgetAllocationChart";
import { ProjectPhases } from "./ProjectPhases";
import { PendingApprovals } from "./PendingApprovals";
import { QuickStatistics } from "./QuickStatistics";
import { ProjectsAtRisk } from "./ProjectsAtRisk";
export function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-gray-900 mb-1">Dashboard</h1>
          <p className="text-gray-500">
            Climate Change Mitigation Projects Overview
          </p>
        </div>
        <button
          onClick={() => navigate("/projects/new")}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center gap-2"
        >
          <span className="text-xl leading-none">+</span>
          New Project
        </button>
      </div>
      <StatsCards />
      <div className="grid grid-cols-2 gap-6 mb-6">
        <GHGReductionChart />
        <ProjectStatusChart />
      </div>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <ProgressTrendChart />
        <BudgetAllocationChart />
      </div>
      <div className="grid grid-cols-3 gap-6 mb-6">
        <ProjectPhases />
        <PendingApprovals />
        <QuickStatistics />
      </div>
      <ProjectsAtRisk />
    </div>
  );
}
