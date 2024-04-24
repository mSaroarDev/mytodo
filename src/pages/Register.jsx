import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Register = () => {
  // showSuccess
  const showSuccess = (m) => toast.success(m);
  const showError = (m) => toast.error(m);

  // loading
  const [loading, setLoading] = useState(false);

  // navigate
  const navigate = useNavigate();

  // states
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  // handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !mobile || !password) {
      showError("Please input all fields");
    } else if (password !== cpassword) {
      showError("Password doesn't match");
    } else {
      try {
        setLoading(true);
        const response = await fetch(
          import.meta.env.VITE_ENV_API_URL + "/user/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              password: password,
              cpassword: cpassword,
              phone: mobile,
            }),
          }
        );

        setLoading(false);
        const res = await response.json();
        if (res.msg == "missing fields") {
          showError("Please input all fields");
        } else if (res.msg == "duplicate email") {
          showError("This email is already exist");
        } else if (res.msg == "weak password") {
          showError("Password must be more than 6 character");
        } else if (res.status === 500) {
          showError("Server side error");
        } else if (response.status === 201) {
          showSuccess("Registration Success");
          navigate("/login");
        }
      } catch (err) {
        console.log("Error: ", err);
      }
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
          <h2 className="text-[20px] font-bold">Create new account</h2>
          <div className="mt-5">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1 mb-2">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1 mb-2">
                <label htmlFor="email">Phone No</label>
                <input
                  type="text"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1 mb-2">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="cpassword">Confirm Password</label>
                <input
                  type="password"
                  value={cpassword}
                  onChange={(e) => setCPassword(e.target.value)}
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
                    Create Account
                  </button>
                )}
              </div>
            </form>

            <div className="flex items-center justify-between mt-5">
              <Link to="/reset-password">Reset Password?</Link>
              <Link to="/">Login now</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
