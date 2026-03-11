import React from "react";
import {
  ArrowLeft,
  Download,
  FileText,
  DollarSign,
  Layers,
  Calendar,
  } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MetricCard from "../Reports/MetricCard";
import "./ProjectReports.css";
import { exportProjectRegisterExcel } from "./ExportProjectRegisterExcel";
interface Project {
  id: string;
  name: string;
  entity: string;
  sector: string;
  status: "Active" | "Planning" | "Implementation" | "Completed";
  startDate: string;
  budget: string;
  ghg: string;
  approvalDate: string;
}
const projects: Project[] = [
  {
    id: "P001",
    name: "Solar Panel Installation",
    entity: "Green Energy Corp",
    sector: "Energy",
    status: "Active",
    startDate: "2024-01-15",
    budget: "$500,000",
    ghg: "1,200 tCO₂e",
    approvalDate: "2024-01-10",
  },
  {
    id: "P002",
    name: "Wind Farm Development",
    entity: "Renewable Solutions Ltd",
    sector: "Energy",
    status: "Planning",
    startDate: "2024-03-01",
    budget: "$2,500,000",
    ghg: "5,800 tCO₂e",
    approvalDate: "2024-02-20",
  },
  {
    id: "P003",
    name: "Electric Vehicle Fleet",
    entity: "Transport Innovations",
    sector: "Transport",
    status: "Implementation",
    startDate: "2024-02-10",
    budget: "$800,000",
    ghg: "950 tCO₂e",
    approvalDate: "2024-02-05",
  },
  {
    id: "P004",
    name: "Building Energy Efficiency",
    entity: "Sustainable Buildings Inc",
    sector: "Building",
    status: "Completed",
    startDate: "2023-11-01",
    budget: "$350,000",
    ghg: "750 tCO₂e",
    approvalDate: "2023-10-25",
  },
];
const metrics = [
  {
    label: "Total Projects",
    value: "4",
    icon: FileText,
    color: "text-green-600",
  },
  {
    label: "Total Budget",
    value: "$4.15M",
    icon: DollarSign,
    color: "text-green-600",
  },
  {
    label: "Active Projects",
    value: "1",
    icon: Layers,
    color: "text-blue-600",
  },
  {
    label: "Generated",
    value: "31/12/2025",
    icon: Calendar,
    color: "text-purple-600",
  },
];
const ProjectRegistryReport = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/reports");
  };
  const handlePdf = () => {
    alert("PDF downloaded successfully");
  };
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HEADER */}
      <div className="bg-white border-b border-gray-200 px-6 py-6">
        <div className="flex items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50"
            >
              <ArrowLeft className="w-4 h-4 text-gray-600" />
              Back to Reports
            </button>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Project Registry Report
              </h2>
              <p className="text-sm text-gray-500">
              Complete list of all projects with key details
              </p>
            </div>
          </div>
          {/* RIGHT */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePdf}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50"
            >
              <Download className="w-4 h-4 text-gray-600" />
              Export PDF
            </button>
            <button
              onClick={exportProjectRegisterExcel}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50"
            >
              <Download className="w-4 h-4 text-gray-600" />
              Export Excel
            </button>
          </div>
        </div>
      </div>
      {/* METRICS ROW */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6 mt-4">
          {metrics.map((metric, index) => (
            <MetricCard key={index} metric={metric} />
          ))}
        </div>
      </div>
      {/* TABLE / CONTENT GOES BELOW */}
        <div className="px-6 py-4">
            {/* Placeholder for table or report content */}
            <div className=" flex items-center bg-white border border-gray-200 rounded-lg p-6 text-black-500 text-1xl font-semibold">
                <FileText className="w-5 h-5 text-green-500"/>Project Details
            </div>
            <div className="registry-table-wrapper">
      <table className="registry-table">
        <thead>
          <tr>
            <th>Project ID</th>
            <th>Project Name</th>
            <th>Entity</th>
            <th>Sector</th>
            <th>Status</th>
            <th>Start Date</th>
            <th>Budget</th>
            <th>GHG Reduction</th>
            <th>Approval Date</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.entity}</td>
              <td>{p.sector}</td>
              <td>
                <span className={`status ${p.status.toLowerCase()}`}>
                  {p.status}
                </span>
              </td>
              <td>{p.startDate}</td>
              <td>{p.budget}</td>
              <td className="ghg">{p.ghg}</td>
              <td>{p.approvalDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>
    </div>
  );
};
export default ProjectRegistryReport;
