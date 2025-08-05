import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface RouteItem {
  label: string;
  path?: string;
  subRoutes?: RouteItem[];
}

interface SidebarProps {
  routes: RouteItem[];
}

export const Sidebar = ({ routes }: SidebarProps) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const location = useLocation();

  const toggleSection = (label: string) => {
    setOpenSections((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <aside className="w-64 bg-white border-r min-h-screen p-4 space-y-2 shadow-sm">
      {routes.map((route, idx) => (
        <div key={idx}>
          {route.subRoutes ? (
            <>
              <button
                onClick={() => toggleSection(route.label)}
                className="w-full text-left font-medium py-2 px-3 rounded-md hover:bg-gray-100"
              >
                {route.label}
              </button>
              {openSections[route.label] && (
                <ul className="ml-4 space-y-1">
                  {route.subRoutes.map((sub, subIdx) => (
                    <li key={subIdx}>
                      <Link
                        to={sub.path!}
                        className={`block px-3 py-1 rounded hover:bg-gray-100 text-sm ${
                          location.pathname === sub.path
                            ? "bg-gray-200 font-semibold"
                            : ""
                        }`}
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <Link
              to={route.path!}
              className={`block px-3 py-2 rounded hover:bg-gray-100 ${
                location.pathname === route.path ? "bg-gray-200 font-semibold" : ""
              }`}
            >
              {route.label}
            </Link>
          )}
        </div>
      ))}
    </aside>
  );
};
