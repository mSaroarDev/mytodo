import { Plus } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { showError, showSuccess } from "../utils/toastMessage";

const NewTaskButton = ({ folder_id, fetchData }) => {
  // states
  const [taskGroup, setTaskGroup] = useState([]);

  // loading
  const [loading, setLoading] = useState(false);

  // handleClick
  const handleClick = async () => {
    Swal.fire({
      title: "Enter a Task",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Create",
      showLoaderOnConfirm: true,
      preConfirm: async (task) => {
        try {
          setLoading(true);
          const apiUrl = `${import.meta.env.VITE_ENV_API_URL}/task/create`;
          const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ title: task, folder_id: folder_id }),
          });
          if (!response.ok) {
            return Swal.showValidationMessage(`
              ${`Please input a task name`}
            `);
          }
          return response.json();
        } catch (error) {
          Swal.showValidationMessage(`
            Request failed: ${error}
          `);
        } finally {
          setLoading(false);
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        const value = result.value;
        if (value.msg === "success") {
          showSuccess("Task Created");
          fetchData();
        } else if (value.status === 406) {
          showError("Please input a task");
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
          <span>New Task</span>
        </button>
      )}
    </>
  );
};

export default NewTaskButton;
