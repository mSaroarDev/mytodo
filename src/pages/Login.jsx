import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { showError, showSuccess } from "../utils/toastMessage";
import Cookies from "js-cookie";

const Login = () => {
  // states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // loading
  const [loading, setLoading] = useState(false);

  // navigate
  const navigate = useNavigate();

  // handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(
        import.meta.env.VITE_ENV_API_URL + "/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );

      setLoading(false);
      const response = await res.json();
      if (res.status === 200) {
        showSuccess("Login Success");
        Cookies.set("token", response.token, {
          expires: 7,
          path: "/",
        });
        localStorage.setItem("token", response.token);
        navigate("/user/dashboard");
      } else {
        showError("Invalid username or password");
      }
    } catch (error) {
      showError("Authentication Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="h-screen w-full flex items-center justify-center bg-bgGray">
        <div className="w-full max-w-[400px] bg-bgWhite p-10">
          <div className="mb-5">
            <Link to="/" className="button-main">
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </Link>
          </div>
          <h2 className="text-[20px] font-bold">Welcome back!</h2>
          <div className="mt-5">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1 mb-2">
                <label htmlFor="email">Email or Phone No</label>
                <input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email">Password</label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <div className="mt-2">
                {loading ? (
                  <button type="submit" className="button-main">
                    <span className="loader"></span>
                    <span>Please wait...</span>
                  </button>
                ) : (
                  <button type="submit" className="button-main">
                    Login
                  </button>
                )}
              </div>
            </form>

            <div className="flex items-center justify-between mt-5">
              <Link to="/forgot">Forgot Password?</Link>
              <Link to="/register">Create New Account</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
