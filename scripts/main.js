import { dataCourses } from './dataCourses.js';
import { dataStudent } from './dataStudent.js';
var coursesTbody = document.getElementById('courses');
var dataTbody = document.getElementById('informacion');
var btnfilterByName = document.getElementById("button-filterByName");
var inputSearchBox = document.getElementById("search-box");
var totalCreditElm = document.getElementById("total-credits");
btnfilterByName.onclick = function () { return applyFilterByName(); };
renderCoursesInTable(dataCourses);
renderDataInTable(dataStudent);
totalCreditElm.innerHTML = "" + getTotalCredits(dataCourses);
function renderDataInTable(student) {
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td> C\u00F3digo </td>\n                           <td> " + student.codigo + " </td>";
    dataTbody.appendChild(trElement);
    var trElement2 = document.createElement("tr");
    trElement2.innerHTML = "<td> C\u00E9dula </td>\n                           <td> " + student.cedula + " </td>";
    dataTbody.appendChild(trElement2);
    var trElement3 = document.createElement("tr");
    trElement3.innerHTML = "<td> Edad </td>\n                           <td> " + student.edad + " </td>";
    dataTbody.appendChild(trElement3);
    var trElement4 = document.createElement("tr");
    trElement4.innerHTML = "<td> Direcci\u00F3n </td>\n                           <td> " + student.direccion + " </td>";
    dataTbody.appendChild(trElement4);
    var trElement5 = document.createElement("tr");
    trElement5.innerHTML = "<td> Telefono </td>\n                           <td> " + student.telefono + " </td>";
    dataTbody.appendChild(trElement5);
    var trElement6 = document.createElement("tr");
    trElement6.innerHTML = "<td> Nombre </td>\n                           <td> " + student.nombre + " </td>";
    dataTbody.appendChild(trElement6);
}
function renderCoursesInTable(courses) {
    console.log('Desplegando cursos');
    courses.forEach(function (course) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + course.name + "</td>\n                           <td>" + course.professor + "</td>\n                           <td>" + course.credits + "</td>";
        coursesTbody.appendChild(trElement);
    });
}
function applyFilterByName() {
    var text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    var coursesFiltered = searchCourseByName(text, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function searchCourseByName(nameKey, courses) {
    return nameKey === '' ? dataCourses : courses.filter(function (c) {
        return c.name.match(nameKey);
    });
}
function getTotalCredits(courses) {
    var totalCredits = 0;
    courses.forEach(function (course) { return totalCredits = totalCredits + course.credits; });
    return totalCredits;
}
function clearCoursesInTable() {
    while (coursesTbody.hasChildNodes()) {
        if (coursesTbody.firstChild != null) {
            coursesTbody.removeChild(coursesTbody.firstChild);
        }
    }
}
