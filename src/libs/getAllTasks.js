export default async function getAllTasks() {
  const res = await fetch(
    `${import.meta.env.VITE_ENV_API_URL}/task/all/tasks`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  const data = await res.json();
  return data.data;
}
