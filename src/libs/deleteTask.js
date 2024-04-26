export default async function deleteTask(task_id) {
  const res = await fetch(
    `${import.meta.env.VITE_ENV_API_URL}/task/delete/${task_id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  const data = await res.json();
  return data.data;
}

export async function deleteTasksByGroups(folder_id) {
  const res = await fetch(
    `${import.meta.env.VITE_ENV_API_URL}/task/delete-tasks/${folder_id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  const data = await res.json();
  return data.data;
}
