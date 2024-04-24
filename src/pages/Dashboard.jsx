import React, { useEffect, useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import StatsCard from "../components/StatsCard";
import getMyTaskGroups from "../libs/getMyTaskGroups";
import getTasksByGroupId from "../libs/getTasksByGroupId";
import getAllTasks from "../libs/getAllTasks";

const Dashboard = () => {
  // get all groups by me
  const [totalGroups, setTotalGroups] = useState(0);
  const [totalTasks, setTotalTasks] = useState(0);

  const allGroups = async () => {
    getMyTaskGroups()
      .then((data) => setTotalGroups(data))
      .catch((err) => console.log(err));
  };

  const allTasks = async () => {
    getAllTasks()
      .then((data) => setTotalTasks(data))
      .catch((err) => console.log(err));
  };

  // completed task
  const completedTask =
    totalTasks && totalTasks.filter((task) => task.status == "Completed");

  // incompleted task
  const inCompletedTask =
    totalTasks && totalTasks.filter((task) => task.status == "Incomplete");
  console.log(completedTask);

  useEffect(() => {
    allGroups();
    allTasks();
  }, []);

  return (
    <>
      <DashboardLayout>
        <div className="__page-header">
          <h2 className="text-[22px] font-bold">Overview</h2>

          <div className="mt-7">
            <div className="grid grid-cols-12 gap-5">
              <StatsCard count={totalGroups.length} text={"Task Groups"} />
              <StatsCard count={totalTasks.length} text={"Total Tasks"} />
              <StatsCard
                count={inCompletedTask.length}
                text={"Incompleted Task"}
              />
              <StatsCard count={completedTask.length} text={"Completed Task"} />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
