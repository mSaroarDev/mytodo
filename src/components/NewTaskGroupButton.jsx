import { Plus } from "lucide-react";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { showError, showSuccess } from "../utils/toastMessage";

const NewTaskGroupButton = ({ fetchData }) => {
  // states
  const [taskGroup, setTaskGroup] = useState([]);

  // loading
  const [loading, setLoading] = useState(false);

  // handleClick
  const handleClick = async () => {
    Swal.fire({
      title: "Enter a Task Group Name",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Create",
      showLoaderOnConfirm: true,
      preConfirm: async (taskGroup) => {
        try {
          const apiUrl = `${import.meta.env.VITE_ENV_API_URL}/task/create-task`;
          const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            credentials: "include",
            body: JSON.stringify({ title: taskGroup }),
          });
          if (!response.ok) {
            return Swal.showValidationMessage(`
              ${`Please input a task group name`}
            `);
          }
          return response.json();
        } catch (error) {
          Swal.showValidationMessage(`
            Request failed: ${error}
          `);
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        const value = result.value;
        if (value.msg === "success") {
          showSuccess("Task Group Created");
          fetchData();
        } else if (value.status === 406) {
          showError("Please input a task group");
        } else {
          showError("Group create failed");
        }
      }
    });
  };

  return (
    <>
      {loading ? (
        <button
          type="submit"
          className="bg-[#292929] text-white px-4 py-2 rounded-full flex items-center justify-center gap-2 fixed right-14 bottom-14"
        >
          <span className="loader"></span>
          <span>Please wait...</span>
        </button>
      ) : (
        <button
          onClick={handleClick}
          className="bg-[#292929] text-white px-4 py-2 rounded-full flex items-center justify-center gap-2 fixed right-14 bottom-14"
        >
          <Plus />
          <span>New Task Group</span>
        </button>
      )}
    </>
  );
};

export default NewTaskGroupButton;
