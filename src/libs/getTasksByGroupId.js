export default async function getTasksByGroupId(folder_id) {
  const res = await fetch(
    `${import.meta.env.VITE_ENV_API_URL}/task/all/${folder_id}`,
    {
      credentials: "include",
    }
  );

  const data = await res.json();
  return data.data;
}
