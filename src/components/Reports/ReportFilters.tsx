import React, { useState } from "react";
import { Filter, Eye, Download } from "lucide-react";
import { exportProjectRegisterExcel } from "./ExportProjectRegisterExcel";
export const ReportFilters: React.FC = () => {
  const [sector, setSector] = useState("All");
  const [entity, setEntity] = useState("All");
  const [status, setStatus] = useState("All");
  const [approved, setApproved] = useState("All");
  return (
    <div className="p-6 bg-white border rounded-xl">
      {/* Header */}
      <div className="flex items-start gap-3 mb-6">
        <Filter className="w-5 h-5 text-gray-600 mt-1" />
        <div>
          <h3 className="text-gray-900 font-semibold">Report Filters</h3>
          <p className="text-sm text-gray-500">
            Customize your report with filters and date ranges
          </p>
        </div>
      </div>
      {/* Dropdowns */}
      <div className="grid grid-cols-4 gap-4 mb-4">
        <select
          value={sector}
          onChange={(e) => setSector(e.target.value)}
          className="border rounded-md px-3 py-2 text-sm"
        >
          <option>All Sectors</option>
          <option>Renewable Energy</option>
          <option>Energy Efficiency</option>
          <option>Transportation</option>
          <option>Building</option>
        </select>
        <select
          value={entity}
          onChange={(e) => setEntity(e.target.value)}
          className="border rounded-md px-3 py-2 text-sm"
        >
          <option>All Entities</option>
          <option>Environment Agency Abu Dhabi</option>
          <option>Abu Dhabi National Oil Company</option>
          <option>Dubai Electricity and Water Authority</option>
          <option>Masdar</option>
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border rounded-md px-3 py-2 text-sm"
        >
          <option>All Statuses</option>
          <option>On Track</option>
          <option>At Risk</option>
          <option>Delayed</option>
          <option>Completed</option>
        </select>

        <select
          value={approved}
          onChange={(e) => setApproved(e.target.value)}
          className="border rounded-md px-3 py-2 text-sm"
        >
          <option>All States</option>
          <option>Published</option>
          <option>Draft</option>
          <option>Under Review</option>
        </select>
      </div>
      {/* Dates */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <input
          type="date"
          className="border rounded-md px-3 py-2 text-sm"
        />
        <input
          type="date"
          className="border rounded-md px-3 py-2 text-sm"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end items-center gap-3">
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition">
          <Eye className="w-4 h-4" />
          Preview Report
        </button>

        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition">
          <Download className="w-4 h-4" />
          Export PDF
        </button>

        <button
          onClick={exportProjectRegisterExcel}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition"
        >
          <Download className="w-4 h-4" />
          Export Excel
        </button>
        <button
          onClick={exportProjectRegisterExcel}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition"
        >
          <Download className="w-4 h-4" />
          Export CSV
        </button>
      </div>
    </div>
  );
};
