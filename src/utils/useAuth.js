import Cookies from "js-cookie";

const useAuth = () => {
  const cookie = Cookies.get("session");
  if (cookie) {
    return true;
  } else {
    return false;
  }
};

export default useAuth;
