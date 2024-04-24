import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../utils/useAuth";

const ProtectedOutlet = () => {
  const isLogged = useAuth();

  return isLogged ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedOutlet;
