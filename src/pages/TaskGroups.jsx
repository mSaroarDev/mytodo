import React, { useEffect, useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import TaskGroupCard from "../components/TaskGroupCard";
import NewTaskGroupButton from "../components/NewTaskGroupButton";
import getMyTaskGroups, { getTaskGroupById } from "../libs/getMyTaskGroups";
import { useLocation, useParams } from "react-router-dom";

const TaskGroup = () => {
  // data
  const [data, setData] = useState([]);

  // fetch data
  const fetchData = async () => {
    getMyTaskGroups()
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  };

  // fetch data
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <DashboardLayout>
        <div className="__page-header">
          <h2 className="text-[22px] font-bold">All Groups of Tasks</h2>

          <div className="mt-7">
            <div className="grid grid-cols-12 gap-5">
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
                data.map((item) => <TaskGroupCard key={item._id} data={item} />)
              )}
            </div>
          </div>
        </div>

        <NewTaskGroupButton fetchData={fetchData} />
      </DashboardLayout>
    </>
  );
};

export default TaskGroup;
