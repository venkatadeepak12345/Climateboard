import { Menu, Globe, Bell, LogOut, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
interface HeaderProps {
  onMenuClick: () => void;
}
export function Header({ onMenuClick }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate=useNavigate();
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const handleSignOut = () => {
    alert("Signing out...");
    navigate('/')
  }
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
      {/* LEFT */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
          >
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
          <span className="text-gray-700 font-medium">
            Abu Dhabi Environment Agency
          </span>
        </div>
        {/* RIGHT */}
        <div className="flex items-center gap-4 relative">
          <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 rounded-md">
            <Globe className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-700">English</span>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-md relative">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
          {/* PROFILE */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 pl-4 border-l border-gray-200"
            >
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-semibold">
                A
              </div>
              <span className="text-sm text-gray-700">
                Ahmed Al-Mansouri
              </span>
            </button>
            {/* DROPDOWN */}
            {open && (
              <div className="absolute right-0 mt-3 w-56 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
                 <div className="p-4 border-b">
                  <p className="text-sm font-semibold text-gray-900">
                    Ahmed Al-Mansouri
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-600 mt-1">
                    <Mail className="w-3 h-3" />
                    ahmed@gmail.com
                  </div>
                </div>
                <button
                  onClick={handleSignOut}
                  className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-600 hover:bg-gray-50 rounded-b-xl"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}