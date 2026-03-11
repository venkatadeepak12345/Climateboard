import React, { useState } from "react";
import AdhocReports from "../components/Reports/AdhocReports";
import "./Reports.css";
import ScheduledReports from "./Reports/ScheduledReports";
import StandardReports from "./Reports/StandardReports";
const Reports = () => {
  const [activeTab, setActiveTab] = useState<"standard" | "adhoc" | "scheduled">("standard");

  return (
    <div className="reports-page">
      <h3 className="reports-title">Reports</h3>
      <p className="reports-subtitle">
        Generate and export project reports and analytics
      </p>
      {/* ===== Tabs (ALWAYS VISIBLE) ===== */}
      <div className="reports-tabs">
        <button
          className={`tab-btn ${activeTab === "standard" ? "active" : ""}`}
          onClick={() => setActiveTab("standard")}
        >
          Standard Reports
        </button>
        <button
          className={`tab-btn ${activeTab === "adhoc" ? "active" : ""}`}
          onClick={() => setActiveTab("adhoc")}
        >
          Ad-hoc Builder
        </button>

        <button
          className={`tab-btn ${activeTab === "scheduled" ? "active" : ""}`}
          onClick={() => setActiveTab("scheduled")}
        >
          Scheduled Reports
        </button>
      </div>
      
      <div className="reports-content">
  {activeTab === "standard" && <StandardReports/> 
   
  }

  {activeTab === "adhoc" && <AdhocReports />}

  {activeTab === "scheduled" && <ScheduledReports />}
</div>

    </div>
  );
};

export default Reports;
