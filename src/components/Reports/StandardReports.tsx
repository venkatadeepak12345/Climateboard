import { AlertTriangle, ArrowUpDown, DollarSign, Download, Eye, FileText, RecycleIcon, Target, Text, TrendingUp } from "lucide-react";
import { exportProjectRegisterExcel } from "./ExportProjectRegisterExcel";
import "./StandardReports.css";
import { StatsCards } from "../StatsCards";
import ProjectRegistry from "../ProjectRegistry";
import { useNavigate } from "react-router-dom";
import ProjectRegisterTable from "../Reports/ProjectRegisterTable";
import GhgReduction from "./GhgReduction";
import { ReportFilters } from "./ReportFilters";
const StandardReports = () => {
  const navigate=useNavigate()
  const handleclick=()=>{
    navigate('/project/register/report')
  }
   const handlepreview=()=>{
    navigate('/ghg/reduction/report')
  }
  return (
    <div className="standard-card-container">
        <div className="standard-report-card">
            <h4 className="flex items-center gap-2 text-gray-900">
        <FileText className="w-4 h-4 text-gary-500"/>
        Project Register</h4>
      <p className="subtext">
Complete list of all projects with key details
      </p>
      <div className="included-fields">
        <span>Initiative Name</span>
        <span>Entity Name</span>
        <span>Project Sector</span>
        <span>+4 more</span>
      </div>
      <div className="actions">
        <button onClick={handleclick} className="preview-btn">
            <Eye className="w-4 h-4 text-gray-500"/>
            Preview</button>
        <button
          className="export-btn"
          onClick={exportProjectRegisterExcel}
        >
          <Download className="w-4 h-4 text-gary-500"/>
          Export
        </button>
      </div>
        </div>
        <div className="standard-report-card">
            <h4 className="flex items-center gap-2 text-gray-900">
        <Target className="w-4 h-4 text-gary-500"/>
        GHG Reduction Summary</h4>
        <p className="subtext">
        Planned vs achieved emissions reduction by sector/entity/year
        </p>
        <div className="included-fields">
        <span>Initiative Name</span>
        <span>Entity Name</span>
        <span>Number of Projects</span>
        <span>+3 more</span>
        </div>
        <div className="actions">
        <button onClick={handlepreview} className="preview-btn">
            <Eye className="w-4 h-4 text-gray-500"/>
            Preview</button>
       <button
          className="export-btn"
          onClick={exportProjectRegisterExcel}
        >
          <Download className="w-4 h-4 text-gary-500"/>
          Export
        </button>
        </div>
        </div>
       <div className="standard-report-card">
            <h4 className="flex items-center gap-2 text-gray-900">
        <TrendingUp className="w-4 h-4 text-gary-500"/>
        Progress & KPI Report
        </h4>
        <p className="subtext">
    Project progress and key performance indicators
        </p>
        <div className="included-fields">
        <span>Initiative Name</span>
        <span>Entity Name</span>
        <span>Number of Projects</span>
        <span>+3 more</span>
        </div>
        <div className="actions">
        <button className="preview-btn">
            <Eye className="w-4 h-4 text-gray-500"/>
            Preview</button>
       <button
          className="export-btn"
          onClick={exportProjectRegisterExcel}
        >
          <Download className="w-4 h-4 text-gary-500"/>
          Export
        </button>
        </div>
</div>
<div className="standard-report-card">
            <h4 className="flex items-center gap-2 text-gray-900">
        <DollarSign className="w-4 h-4 text-gary-500"/>
        Budget & Financial Summary</h4>
        <p className="subtext">
      Budget allocation and financial status by type/status
        </p>
        <div className="included-fields">
        <span>Initiative Name</span>
        <span>Entity Name</span>
        <span>Number of Projects</span>
        <span>+3 more</span>
        </div>
        <div className="actions">
        <button className="preview-btn">
            <Eye className="w-4 h-4 text-gray-500"/>
            Preview</button>
       <button
          className="export-btn"
          onClick={exportProjectRegisterExcel}
        >
          <Download className="w-4 h-4 text-gary-500"/>
          Export
        </button>
        </div>
</div>
<div className="standard-report-card">
            <h4 className="flex items-center gap-2 text-gray-900">
        <ArrowUpDown className="w-4 h-4 text-gary-500"/>
        Amendents Logs</h4>
        <p className="subtext">
      History of project amendments with change highlights
        </p>
        <div className="included-fields">
        <span>Initiative Name</span>
        <span>Entity Name</span>
        <span>Number of Projects</span>
        <span>+3 more</span>
        </div>
        <div className="actions">
        <button className="preview-btn">
            <Eye className="w-4 h-4 text-gray-500"/>
            Preview</button>
       <button
          className="export-btn"
          onClick={exportProjectRegisterExcel}
        >
          <Download className="w-4 h-4 text-gary-500"/>
          Export
        </button>
        </div>
</div>

<div className="standard-report-card">
            <h4 className="flex items-center gap-2 text-gray-900">
        <AlertTriangle className="w-4 h-4 text-gary-500"/>
        Challenges & Escalations</h4>
        <p className="subtext">
       Projects with challenges and committee escalations
        </p>
        <div className="included-fields">
        <span>Initiative Name</span>
        <span>Entity Name</span>
        <span>Number of Projects</span>
        <span>+3 more</span>
        </div>
        <div className="actions">
        <button className="preview-btn">
            <Eye className="w-4 h-4 text-gray-500"/>
            Preview</button>
       <button
          className="export-btn"
          onClick={exportProjectRegisterExcel}
        >
          <Download className="w-4 h-4 text-gary-500"/>
          Export
        </button>
        </div>
</div>
<div>
  
</div>
<div className="project-register-full">
  <ProjectRegisterTable />
</div>
<div className="project-register-full">
  <GhgReduction/>
</div>
<div className="project-register-full">
  <ReportFilters/>
</div>
</div>
  );
};
export default StandardReports;
