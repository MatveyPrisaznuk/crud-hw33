let t=()=>fetch("http://localhost:3000/students").then(t=>t.json()),e=(t,e)=>fetch(`http://localhost:3000/students/${t}`,{method:"PATCH",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(t=>t.json()),n=document.querySelector('[id="add-student-form"]'),l=document.querySelector('[id="get-students-btn"]'),s=document.querySelector("tbody"),a=null;function u(t){s.innerHTML=t.map(({id:t,name:e,age:n,course:l,skills:s,email:a,isEnrolled:u})=>`      <tr id="${t}">
                    <th>${t}</th>
                    <th>${e}</th>
                    <th>${n}</th>
                    <th>${l}</th>
                    <th>${s}</th>
                    <th>${a}</th>
                    <th>${u}</th>
                    <th> <button type="button" class="btn-change" data-action="edit">\u{417}\u{43C}\u{456}\u{43D}\u{438}\u{442}\u{438}</button>
                     <button type="button" class="btn-delete" data-action="delete">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button></th>
                </tr>`).join("")}l.addEventListener("click",()=>{t().then(t=>u(t))}),n.addEventListener("submit",l=>{l.preventDefault();let s=l.currentTarget.elements,o={name:s.name.value,age:s.age.value,course:s.course.value,skills:s.skills.value,email:s.email.value,isEnrolled:s.isEnrolled.checked};a?e(a,o).then(()=>{t().then(t=>{n.reset(),u(t),a=null})}):fetch("http://localhost:3000/students",{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(t=>t.json()).then(()=>{t().then(t=>{n.reset(),u(t)})})}),s.addEventListener("click",l=>{let s=l.target.dataset.action;if(!s)return;let o=l.target.closest("tr").id;"delete"===s&&fetch(`http://localhost:3000/students/${o}`,{method:"DELETE"}).then(t=>t.json()).then(()=>t()).then(t=>u(t)),"edit"===s&&e(o).then(t=>{n.name.value=t.name,n.age.value=t.age,n.course.value=t.course,n.skills.value=t.skills,n.email.value=t.email,n.isEnrolled.checked=t.isEnrolled,a=o})});
//# sourceMappingURL=crud-hw33.59456639.js.map
