import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ProjectRegistry.css";
import { Download} from "lucide-react";
const ProjectRegistry = () => {
  const location = useLocation();
  const navigate=useNavigate();
  const handleclick=()=>{
    navigate("/projects/new")
   }
  const handleView=()=>{
    navigate("/project/details")
  }
  const handleEdit=()=>{
    navigate("/projects/new")
  }
  const handlePdf=()=>{
    alert("Successfully Exported");
  }
  const projects = location.state ? [location.state] : [];
  const [search, setSearch] = useState("");
  const [sector, setSector] = useState("all");
  const [status, setStatus] = useState("all");
  const [state, setState] = useState("all");
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesSearch =
        p.initiativeName?.toLowerCase().includes(search.toLowerCase()) ||
        p.entity?.toLowerCase().includes(search.toLowerCase());
      const matchesSector = sector === "all" || p.projectSector === sector;
      const matchesStatus = status === "all" || p.BudgetStatus === status;
      const matchesState = state === "all" || p.scope === state;
      return matchesSearch && matchesSector && matchesStatus && matchesState;
    });
  }, [projects, search, sector, status, state]);
  return (
    <div className="registry-page">
    <div className="registry-header">
        <div>
          <h2>Project Registry</h2>
          <p>Climate Change Mitigation Projects Database</p>
        </div>
        <button onClick={handleclick} className="btn-primary">+ New Project</button>
      </div>
<div className="filters-card">
<div className="filters-title">Search & Filters</div>
  <div className="filters-toolbar">
    {/* Left: Search */}
    <input
      type="text"
      placeholder="Search projects..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="search-input"
    />
    {/* Right: Filters + Export */}
    <div className="filters-right">
      <select value={sector} onChange={(e) => setSector(e.target.value)}>
        <option value="all">All Sectors</option>
        <option value="Renewable Energy">Renewable Energy</option>
        <option value="Energy Efficiency">Energy Efficiency</option>
        <option value="Transporation">Industry</option>
        <option value="Buildings">Buildings</option>
        <option value="Industry">Industry</option>
        <option value="Waste">Waste</option>
        <option value="Agriculture">Agriculture</option>
      </select>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="all">All Status</option>
        <option value="On Track">On Track</option>
        <option value="At Risk">At Risk</option>
        <option value="Delayed">Delayed</option>
        <option value='Completed'>Completed</option>
        <option value="Cancelled">Cancelled</option>
      </select>
      <select value={state} onChange={(e) => setState(e.target.value)}>
        <option value="all">All States</option>
        <option value="Draft">Draft</option>
        <option value="Submitted">Submitted</option>
        <option value="Under Review">Under Review</option>
        <option value="Approved">Approved</option>
        <option value="Pending">Pending</option>
        <option value="Rejected">Rejected</option>
      </select>
    <button
              onClick={handlePdf}
              className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50"
            >
              <Download className="w-4 h-4 text-gray-600" />
           Explore PDF
            </button>
     </div>
  </div>
</div>
  <h3 className="count-text">
        Projects ({filteredProjects.length})
      </h3>
      <div className="table-wrapper">
        <table className="registry-table">
          <thead>
            <tr>
              <th>Initiative Name</th>
              <th>Entity</th>
              <th>Sector</th>
              <th>Status</th>
              <th>Manager</th>
              <th>Progress</th>
              <th>Budget (AED)</th>
              <th>GHG Reduction</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.length === 0 ? (
              <tr>
                <td colSpan={8} className="empty">
                  No projects found
                </td>
              </tr>
            ) : (
              filteredProjects.map((p, i) => (
                <tr key={i}>
                  <td>{p.initiativeName}</td>
                  <td>{p.entity}</td>
                  <td>{p.projectSector}</td>
                  <td>{p.BudgetStatus}</td>
                  <td>{p.projectManagerName}</td>
                  <td>
                    <div className="progress">
                      <span style={{ width: `${p.PlannedProgress}%` }} />
                    </div>
                    <small>{p.PlannedProgress}%</small>
                  </td>
                  <td>{p.Budget}</td>
                  <td>{p.PlannedGHGReduction}</td>
                 <td>
  <button onClick={handleView} className="btn-secondary">
    <i className="bi bi-eye"></i>
  </button>
</td>
<td>
  <button onClick={handleEdit} className="btn-secondary">
    <i className="bi bi-pencil"></i>
  </button>
</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ProjectRegistry;
