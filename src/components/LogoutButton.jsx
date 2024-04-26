import { LogOut } from "lucide-react";
import React from "react";
import Swal from "sweetalert2";
import { showError, showSuccess } from "../utils/toastMessage";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  // navigate
  const navigate = useNavigate();
  // api
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to Logout!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          localStorage.removeItem("token");
          const token = localStorage.getItem("token");
          if (!token) {
            showSuccess("Logout Success");
            navigate("/login");
          }
        } catch (error) {
          showError("Server Error");
        }
      }
    });
  };

  return (
    <>
      <button
        onClick={handleLogout}
        className="bg-[#292929] text-white px-3 w-full flex items-center justify-center p-2 gap-2 rounded-md"
      >
        <LogOut className="w-4 h-4" /> <span>Log Out</span>
      </button>
    </>
  );
};

export default LogoutButton;
