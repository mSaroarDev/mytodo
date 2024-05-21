export default async function markDone(task_id) {
  const res = await fetch(
    `${import.meta.env.VITE_ENV_API_URL}/task/mark-done/${task_id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      credentials: "include",
    }
  );

  const data = await res.json();
  return data.data;
}
