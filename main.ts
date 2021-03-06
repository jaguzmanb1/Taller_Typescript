import { Course } from './course.js';
import { Student } from './student.js' 
import { dataCourses } from './dataCourses.js';
import { dataStudent } from './dataStudent.js';

let coursesTbody: HTMLElement = document.getElementById('courses')!;
let dataTbody: HTMLElement = document.getElementById('informacion')!;

const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;
const totalCreditElm: HTMLElement = document.getElementById("total-credits")!;


btnfilterByName.onclick = () => applyFilterByName();

renderCoursesInTable(dataCourses);
renderDataInTable(dataStudent);

totalCreditElm.innerHTML = `${getTotalCredits(dataCourses)}`


function renderDataInTable(student: Student): void {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td> Código </td>
                           <td> ${student.codigo} </td>`;
    dataTbody.appendChild(trElement);

    let trElement2 = document.createElement("tr");
    trElement2.innerHTML = `<td> Cédula </td>
                           <td> ${student.cedula} </td>`;
    dataTbody.appendChild(trElement2);

    let trElement3 = document.createElement("tr");
    trElement3.innerHTML = `<td> Edad </td>
                           <td> ${student.edad} </td>`;
    dataTbody.appendChild(trElement3);

    let trElement4 = document.createElement("tr");
    trElement4.innerHTML = `<td> Dirección </td>
                           <td> ${student.direccion} </td>`;
    dataTbody.appendChild(trElement4);

    let trElement5 = document.createElement("tr");
    trElement5.innerHTML = `<td> Telefono </td>
                           <td> ${student.telefono} </td>`;
    dataTbody.appendChild(trElement5);

    let trElement6 = document.createElement("tr");
    trElement6.innerHTML = `<td> Nombre </td>
                           <td> ${student.nombre} </td>`;
    dataTbody.appendChild(trElement6);
}

function renderCoursesInTable(courses: Course[]): void {
  console.log('Desplegando cursos');
  courses.forEach((course) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${course.name}</td>
                           <td>${course.professor}</td>
                           <td>${course.credits}</td>`;
    coursesTbody.appendChild(trElement);
  });
}
 

function applyFilterByName() { 
  let text = inputSearchBox.value;
  text = (text == null) ? '' : text;
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByName(text, dataCourses);
  renderCoursesInTable(coursesFiltered);
}

function searchCourseByName(nameKey: string, courses: Course[]) {
  return nameKey === '' ? dataCourses : courses.filter( c => 
    c.name.match(nameKey));
}


function getTotalCredits(courses: Course[]): number {
  let totalCredits: number = 0;
  courses.forEach((course) => totalCredits = totalCredits + course.credits);
  return totalCredits;
}

function clearCoursesInTable() {
  while (coursesTbody.hasChildNodes()) {
    if (coursesTbody.firstChild != null) {
      coursesTbody.removeChild(coursesTbody.firstChild);
     
    }
  }
}