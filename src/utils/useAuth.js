import Cookies from "js-cookie";

const useAuth = () => {
  const token = Cookies.get("token");
  if (token) {
    return true;
  } else {
    return false;
  }
};

export default useAuth;
