import { getStudents } from "./api/get-students";
import { deleteStudents } from "./api/delete-students";
import { postStudents } from "./api/post-students";
import { changeStudents } from "./api/change-students";

const form = document.querySelector('[id="add-student-form"]');
const buttonGet = document.querySelector('[id="get-students-btn"]');
const tbody = document.querySelector("tbody");
let editingId = null;

function createStudents(array) {
  const item = array
    .map(({ id, name, age, course, skills, email, isEnrolled }) => {
      return `      <tr id="${id}">
                    <th>${id}</th>
                    <th>${name}</th>
                    <th>${age}</th>
                    <th>${course}</th>
                    <th>${skills}</th>
                    <th>${email}</th>
                    <th>${isEnrolled}</th>
                    <th> <button type="button" class="btn-change" data-action="edit">Змінити</button>
                     <button type="button" class="btn-delete" data-action="delete">Видалити</button></th>
                </tr>`;
    })
    .join("");
  tbody.innerHTML = item;
}

buttonGet.addEventListener("click", () => {
  getStudents().then((res) => createStudents(res));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const elements = event.currentTarget.elements;

  const studentsData = {
    name: elements.name.value,
    age: elements.age.value,
    course: elements.course.value,
    skills: elements.skills.value,
    email: elements.email.value,
    isEnrolled: elements.isEnrolled.checked,
  };

  if (editingId) {
    changeStudents(editingId, studentsData).then(() => {
      getStudents().then((res) => {
        form.reset();
        createStudents(res);
        editingId = null;
      });
    });

    return;
  }

  postStudents(studentsData).then(() => {
    getStudents().then((res) => {
      form.reset();
      createStudents(res);
    });
  });
});

tbody.addEventListener("click", (event) => {
  const action = event.target.dataset.action;
  if (!action) {
    return;
  }
  const tr = event.target.closest("tr");
  const id = tr.id;
  if (action === "delete") {
    deleteStudents(id)
      .then(() => getStudents())
      .then((res) => createStudents(res));
  }

  if (action === "edit") {
    changeStudents(id).then((student) => {
      form.name.value = student.name;
      form.age.value = student.age;
      form.course.value = student.course;
      form.skills.value = student.skills;
      form.email.value = student.email;
      form.isEnrolled.checked = student.isEnrolled;

      editingId = id;
    });
  }
});
