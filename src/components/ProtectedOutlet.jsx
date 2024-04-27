import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../utils/useAuth";

const ProtectedOutlet = ({ children }) => {
  let isLogged = useAuth();

  return isLogged ? children : <Navigate to="/login" />;
};

export default ProtectedOutlet;
