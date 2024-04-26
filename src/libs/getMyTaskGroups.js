export default async function getMyTaskGroups() {
  const res = await fetch(`${import.meta.env.VITE_ENV_API_URL}/task/all`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  const data = await res.json();
  return data.data;
}

// get a task group by id
export async function getTaskGroupById(folder_id) {
  const res = await fetch(
    `${import.meta.env.VITE_ENV_API_URL}/task/taskgroup/${folder_id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  const data = await res.json();
  return data.data;
}
