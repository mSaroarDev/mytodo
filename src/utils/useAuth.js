import Cookies from "js-cookie";

const useAuth = () => {
  const cookie = Cookies.get("token");

  if (cookie) {
    return true;
  }

  return false;
};

export default useAuth;
