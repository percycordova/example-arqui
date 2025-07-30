import { Outlet, Link, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import { FaArrowLeft } from "react-icons/fa";

const AppLayout = () => {
  const navigate = useNavigate();

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
      <Button
        text="Anterior"
        onClick={() => navigate(-1)}
        color="blue"
        icon={FaArrowLeft}
      />
      <Outlet />
    </div>
  );
};

export default AppLayout;
