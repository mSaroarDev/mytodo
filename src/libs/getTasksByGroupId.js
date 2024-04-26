export default async function getTasksByGroupId(folder_id) {
  const res = await fetch(
    `${import.meta.env.VITE_ENV_API_URL}/task/all/${folder_id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  const data = await res.json();
  return data.data;
}
