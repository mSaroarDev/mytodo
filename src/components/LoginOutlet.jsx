import { Navigate } from "react-router-dom";
import useAuth from "../utils/useAuth";

const LoginOutlet = ({ children }) => {
  const isLogged = useAuth();

  if (isLogged) {
    return <Navigate to="/user/dashboard" />;
  } else {
    return children;
  }
};

export default LoginOutlet;
