export const getStudents = async () => {
  const res = await fetch("http://localhost:3000/students");
  return res.json();
};
