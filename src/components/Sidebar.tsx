import { LayoutDashboard, FolderOpen, PlusSquare, FileText, Monitor, Settings, User, Target, Building } from 'lucide-react';
import { NavLink } from 'react-router-dom';
interface SidebarProps {
  isOpen: boolean;
}
export function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside className={`bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ${isOpen ? 'w-64' : 'w-0'} overflow-hidden`}>
      <div className="p-4 border-b border-gray-200 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-700">
          <Building className="h-8 w-8" />
        </div>
        <div>
          <div className="text-gray-900">Climate Registry</div>
          <div className="text-xs text-gray-500">Abu Dhabi MRV</div>
        </div>
      </div>
      <nav className="flex-1 p-4">
        <div className="mb-6">
          <div className="text-xs text-gray-500 mb-2 px-2">Main Navigation</div>
          <div className="space-y-1">
            <NavLink to='/dashboard' className="flex items-center gap-3 px-3 py-2 text-gray-900 bg-gray-100 rounded-md">
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard</span>
            </NavLink>
            <NavLink to="/Project/registry" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
              <FolderOpen className="w-4 h-4" />
              <span>Project Registry</span>
            </NavLink>
            <NavLink to="/projects/new" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
              <PlusSquare className="w-4 h-4" />
              <span>New Project</span>
            </NavLink>
            <NavLink to="/reports" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
              <FileText className="w-4 h-4" />
              <span>Reports</span>
            </NavLink>
          </div>
        </div>
        <div className="mb-6">
          <div className="text-xs text-gray-500 mb-2 px-2">Executives</div>
          <div className="space-y-1">
            <NavLink to="/executive/dashboard" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
              <Monitor className="w-4 h-4" />
              <span>Executive Dashboard</span>
            </NavLink>
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-500 mb-2 px-2">Administration</div>
          <div className="space-y-1">
            <NavLink to="/settings" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </NavLink>
          </div>
        </div>
      </nav>
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700">
            <Target className='w-5 h-5 text-gray-500'/>
          </div>
          <div className="flex-1">
            <div className="text-sm text-gray-900">Ahmed Al-Mansouri</div>
            <div className="text-xs text-gray-500">Admin</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
