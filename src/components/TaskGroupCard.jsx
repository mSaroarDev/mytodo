import { FolderOpen } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const TaskGroupCard = ({ data }) => {
  return (
    <>
      <div className="col-span-12 lg:col-span-6 bg-white shadow-sm px-5 py-3 flex items-start gap-3">
        <FolderOpen className="w-6 h-6 mt-1 lg:mt-0" />
        <Link to={`/user/task-group/${data?._id}`} className="hover:underline">
          {data?.title}
        </Link>
      </div>
    </>
  );
};

export default TaskGroupCard;
