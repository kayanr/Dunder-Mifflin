let selectedRow = null;

function onFormSubmit() {
  if (validate()) {
    let formData = readFormData();
    if (selectedRow == null) insertNewRecord(formData);
    else updateRecord(formData);
    resetForm();
  }
}

function readFormData() {
  let formData = {};
  formData["fullName"] = document.getElementById("fullName").value;
  formData["title"] = document.getElementById("title").value;
  formData["department"] = document.getElementById("department").value;
  formData["salary"] = document.getElementById("salary").value;
  formData["manager"] = document.getElementById("manager").value;
  return formData;
}

function insertNewRecord(data) {
  let table = document
    .getElementById("employeeList")
    .getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fullName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.title;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.department;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.salary;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.manager;
  cell5 = newRow.insertCell(5);
  cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
  document.getElementById("fullName").value = "";
  document.getElementById("title").value = "";
  document.getElementById("department").value = "";
  document.getElementById("salary").value = "";
  document.getElementById("manager").value = "";
  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("title").value = selectedRow.cells[1].innerHTML;
  document.getElementById("department").value = selectedRow.cells[2].innerHTML;
  document.getElementById("salary").value = selectedRow.cells[3].innerHTML;
  document.getElementById("manager").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.fullName;
  selectedRow.cells[1].innerHTML = formData.title;
  selectedRow.cells[2].innerHTML = formData.department;
  selectedRow.cells[3].innerHTML = formData.salary;
  selectedRow.cells[4].innerHTML = formData.manager;
}

function onDelete(td) {
  if (confirm("Are you sure to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();
  }
}
function validate() {
  isValid = true;
  if (document.getElementById("fullName").value == "") {
    isValid = false;
    document.getElementById("fullNameValidationError").classList.remove("hide");
  } else {
    isValid = true;
    if (
      !document
        .getElementById("fullNameValidationError")
        .classList.contains("hide")
    )
      document.getElementById("fullNameValidationError").classList.add("hide");
  }
  return isValid;
}
