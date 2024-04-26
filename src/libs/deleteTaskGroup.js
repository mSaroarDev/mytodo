export default async function deleteTaskGroup(folder_id) {
  const res = await fetch(
    `${import.meta.env.VITE_ENV_API_URL}/task/delete-group/${folder_id}`,
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
