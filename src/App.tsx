import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Dashboard } from "./components/Dashboard";
import { NewProjectForm } from "./components/NewProjectForm";
import ProjectRegistry from "./components/ProjectRegistry";
import Reports from "./components/Reports";
import Settings from "./components/Settings";
import ProjectDetails from "./components/ProjectDetails";
import { ExecutivesDashboard } from "./components/ExecutivesDashboards";
import ProjectRegistryReport from "./components/Reports/ProjectRegistryReport";
import GhgStandardReports from "./components/Reports/GhgStandardReports";
import Login from "./components/Login";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects/new" element={<NewProjectForm />} />
          <Route path="/project/registry" element={<ProjectRegistry />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/executive/dashboard" element={<ExecutivesDashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/project/details" element={<ProjectDetails />} />
          <Route path="/project/register/report" element={<ProjectRegistryReport />} />
          <Route path="/ghg/reduction/report" element={<GhgStandardReports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
