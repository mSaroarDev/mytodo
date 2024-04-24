import React, { useEffect, useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import TaskCard from "../components/TaskCard";
import NewTaskButton from "../components/NewTaskButton";
import { useNavigate, useParams } from "react-router-dom";
import getTasksByGroupId from "../libs/getTasksByGroupId";
import deleteTaskGroup from "../libs/deleteTaskGroup";
import { deleteTasksByGroups } from "../libs/deleteTask";
import { getTaskGroupById } from "../libs/getMyTaskGroups";

const Task = () => {
  // params
  const params = useParams();
  const { folder_id } = params;

  // navigate
  const navigate = useNavigate();

  // states
  const [data, setData] = useState([]);
  const [folderInfo, setFolderInfo] = useState(null);

  // fetch folder data
  useEffect(() => {
    getTaskGroupById(folder_id)
      .then((data) => setFolderInfo(data))
      .catch((err) => console.log(err));
  }, []);

  // const fetchData
  const fetchData = async () => {
    await getTasksByGroupId(folder_id)
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  };

  // delete task group
  const handleDeleteTaskGroup = async () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to mark as done?"
    );
    if (isConfirmed) {
      await deleteTaskGroup(folder_id)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));

      await deleteTasksByGroups(folder_id);
      navigate("/user/task-group");
    }
  };

  // delete all tasks without deleting the group
  const handleClearAllTasks = async () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to clear all tasks?"
    );
    if (isConfirmed) {
      await deleteTasksByGroups(folder_id);
      fetchData();
    }
  };

  // mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <DashboardLayout>
        <div className="__page-header">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-[22px] font-bold">
              All Tasks from {`"${folderInfo && folderInfo.title}"`}
            </h2>
            <div className="flex items-center gap-2 mt-3 lg:mt-0">
              <button
                onClick={handleClearAllTasks}
                className="bg-red-500 hover:bg-red-500/20 hover:text-red-500 text-white px-4 py-2 rounded-sm transition-all duration-300"
              >
                Clear Tasks
              </button>
              <button
                onClick={handleDeleteTaskGroup}
                className="bg-red-500 hover:bg-red-500/20 hover:text-red-500 text-white px-4 py-2 rounded-sm transition-all duration-300"
              >
                Delete Group
              </button>
              <NewTaskButton folder_id={folder_id} fetchData={fetchData} />
            </div>
          </div>

          <div className="mt-7">
            <div className="grid grid-cols-12 gap-1">
              {data < 1 ? (
                <div className="col-span-12 flex items-center justify-center my-5">
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src="/avatar.svg"
                      className="h-[200px] w-auto mb-10"
                      alt="Image"
                    />
                    <p>No Task in this group. Start create</p>
                  </div>
                </div>
              ) : (
                data.map((item) => (
                  <TaskCard key={item._id} data={item} fetchData={fetchData} />
                ))
              )}
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Task;
