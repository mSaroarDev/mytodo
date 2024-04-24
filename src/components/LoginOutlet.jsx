import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../utils/useAuth";

const LoginOutlet = () => {
  const isLogged = useAuth();

  return isLogged ? <Navigate to="/user/dashboard" /> : <Outlet />;
};

export default LoginOutlet;
