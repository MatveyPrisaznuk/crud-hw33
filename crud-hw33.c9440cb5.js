let t=async()=>(await fetch("http://localhost:3000/students")).json(),e=async t=>(await fetch(`http://localhost:3000/students/${t}`,{method:"DELETE"})).json(),a=async t=>{let e={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8"}};return(await fetch("http://localhost:3000/students",e)).json()},n=async(t,e)=>{let a={method:"PATCH",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}};return(await fetch(`http://localhost:3000/students/${t}`,a)).json()},l=document.querySelector('[id="add-student-form"]'),s=document.querySelector('[id="get-students-btn"]'),u=document.querySelector("tbody"),i=null;function o(t){u.innerHTML=t.map(({id:t,name:e,age:a,course:n,skills:l,email:s,isEnrolled:u})=>`      <tr id="${t}">
                    <th>${t}</th>
                    <th>${e}</th>
                    <th>${a}</th>
                    <th>${n}</th>
                    <th>${l}</th>
                    <th>${s}</th>
                    <th>${u}</th>
                    <th> <button type="button" class="btn-change" data-action="edit">\u{417}\u{43C}\u{456}\u{43D}\u{438}\u{442}\u{438}</button>
                     <button type="button" class="btn-delete" data-action="delete">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button></th>
                </tr>`).join("")}s.addEventListener("click",async()=>{o(await t())}),l.addEventListener("submit",async e=>{e.preventDefault();let s=e.currentTarget.elements,u={name:s.name.value,age:s.age.value,course:s.course.value,skills:s.skills.value,email:s.email.value,isEnrolled:s.isEnrolled.checked};i?(await n(i,u),i=null):await a(u),o(await t()),l.reset()}),u.addEventListener("click",async a=>{let s=a.target.dataset.action;if(!s)return;let u=a.target.closest("tr").id;if("delete"===s&&(await e(u),o(await t())),"edit"===s){let t=await n(u);l.name.value=t.name,l.age.value=t.age,l.course.value=t.course,l.skills.value=t.skills,l.email.value=t.email,l.isEnrolled.checked=t.isEnrolled,i=u}});
//# sourceMappingURL=crud-hw33.c9440cb5.js.map
