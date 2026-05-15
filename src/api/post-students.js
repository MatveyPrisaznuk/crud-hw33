export const postStudents = async (studentsData) => {
  const options = {
    method: "POST",
    body: JSON.stringify(studentsData),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  const res = await fetch("http://localhost:3000/students", options);
  return res.json();
};
