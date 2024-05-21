import { Navigate } from "react-router-dom";
import useAuth from "../utils/useAuth";

const ProtectedOutlet = ({ children }) => {
  const isLogged = useAuth();
  console.log(isLogged);

  if (isLogged) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedOutlet;
