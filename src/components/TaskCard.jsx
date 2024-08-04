import { CircleChevronRight } from "lucide-react";
import React from "react";
import markDone from "../libs/markDone";
import deleteTask from "../libs/deleteTask";
import Swal from "sweetalert2";

const TaskCard = ({ data, fetchData }) => {
  // mark as done
  const handleMarkDone = async () => {
    await markDone(data._id)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    fetchData();
  };

  // mark as done
  const handleDelete = async () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete the task?"
    );
    if (isConfirmed) {
      await deleteTask(data._id)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Deleted",
          showConfirmButton: false,
          timer: 1500
        });
      fetchData();
    }
  };

  // mark done
  const modal = () => {
    Swal.fire({
      title: "Do you want to mark as completed?",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Confirm",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        handleMarkDone();
        fetchData();
      }
    });
  };

  return (
    <>
      <div className="col-span-12 bg-white shadow-sm px-5 py-3 gap-3">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-9 flex items-start lg:items-center gap-2">
            <CircleChevronRight className="w-5 h-5 mt-1 lg:mt-0" />
            <span className="text-[15px] w-full">{data?.title}</span>
          </div>
          <div className="col-span-12 lg:col-span-3 flex items-center justify-end gap-3 mt-2 lg:mt-0">
            {data?.status == "Completed" ? (
              <button className="bg-green-500 hover:bg-green-500/20 hover:text-green-500 text-white w-fit px-3 py-1 rounded-md transition-all duration-300">
                Completed
              </button>
            ) : (
              <button
                onClick={()=> modal()}
                className="bg-[#292929] hover:bg-[#292929]/20 hover:text-[#292929] text-white w-fit px-3 py-1 rounded-md transition-all duration-300"
              >
                Mark Done
              </button>
            )}

            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-500/20 hover:text-red-500 text-white w-fit px-3 py-1 rounded-md transition-all duration-300"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
