export const deleteStudents = async (id) => {
  const options = {
    method: "DELETE",
  };
  const res = await fetch(`http://localhost:3000/students/${id}`, options);
  return res.json();
};
