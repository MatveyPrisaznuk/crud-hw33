export const changeStudents = async (id, postToUpdate) => {
  const options = {
    method: "PATCH",
    body: JSON.stringify(postToUpdate),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };

  const res = await fetch(`http://localhost:3000/students/${id}`, options);
  return res.json();
};
