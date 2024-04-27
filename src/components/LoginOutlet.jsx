import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../utils/useAuth";

const LoginOutlet = ({ children }) => {
  let isLogged = useAuth();

  return isLogged ? <Navigate to="/user/dashboard" /> : children;
};

export default LoginOutlet;
