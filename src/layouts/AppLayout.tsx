import { Outlet, Link } from "react-router-dom";

const AppLayout = () => {


  return (
    <div>
      <nav className="flex gap-4 p-4 bg-gray-100 shadow justify-end">
        <Link to="/" className="text-blue-600 font-semibold">
          Inicio
        </Link>
        <Link to="/customer" className="text-blue-600">
          Ficha General
        </Link>
        <Link to="/legal" className="text-blue-600">
          Ficha Judicial
        </Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default AppLayout;
