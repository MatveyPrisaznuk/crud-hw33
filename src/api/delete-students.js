export const deleteStudents = (id) => {
  const options = {
    method: "DELETE",
  };
  return fetch(`http://localhost:3000/students/${id}`, options).then((res) =>
    res.json(),
  );
};
