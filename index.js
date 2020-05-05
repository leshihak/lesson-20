const btnAddUser = document.querySelector('.add-user');
const btnEditUser = document.querySelector('.edit-user');
const loginInput = document.querySelector('.login');
const passwordInput = document.querySelector('.password');
const emailInput = document.querySelector('.email');
const formInfo = document.forms['formInfo'];
const rightBlock = document.querySelector('.right-block');
let currentObjIndex;

let arr = [];

btnAddUser.addEventListener('click', (event) => {
  const obj = {};
  event.preventDefault();
  
  obj.login = loginInput.value;
  obj.password = passwordInput.value;
  obj.email = emailInput.value;
  formInfo.reset();
  arr = [...arr, obj]
  console.log(arr)

  render()
  const buttons = document.querySelectorAll('.btnDelete');
  Array.from(buttons).forEach(deleteElem)

  const btnsEdit = document.querySelectorAll('.btnEdit');
  Array.from(btnsEdit).forEach(editUser);
})


function render() {
  let table = document.querySelector('table');
  table.innerHTML = '';
  count = 0;

  arr.forEach(el => {
    let tbody = document.createElement('tbody');
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    
    tr = tbody.insertRow(tbody.rows.length);
    td = tr.insertCell(tr.cells.length);
    td.classList.add('td');
    td.innerText = count+=1;
    td = tr.insertCell(tr.cells.length);
    td.classList.add('td');
    td.innerText = el.login;
    td = tr.insertCell(tr.cells.length);
    td.classList.add('td');
    td.innerText = el.password;
    td = tr.insertCell(tr.cells.length);
    td.classList.add('td');
    td.innerText = el.email;
    td = tr.insertCell(tr.cells.length);
    td.classList.add('td');
    let btnEdit = document.createElement('button');
    btnEdit.innerText = 'Edit';
    btnEdit.classList.add('btnEdit');
    td.classList.add('td');
    td.appendChild(btnEdit);
    td = tr.insertCell(tr.cells.length);
    let btnDelete = document.createElement('button');
    btnDelete.innerText ='Delete';
    btnDelete.classList.add('btnDelete');
    td.classList.add('td');
    td.appendChild(btnDelete);
    tr.appendChild(td);
    tbody.appendChild(tr);
    table.appendChild(tbody);
  }) 
}

function deleteElem(button) {
  button.onclick = () => {
    let td = button.parentNode.parentNode;
    arr = arr.filter((value, index) => {
      return index !== td.rowIndex
    });
    render();
    
    const buttons = document.querySelectorAll('.btnDelete');
    Array.from(buttons).forEach(deleteElem);
    const btnsEdit = document.querySelectorAll('.btnEdit');
    Array.from(btnsEdit).forEach(editUser);
  }
}


function editUser(button) {
  button.onclick = () => {
    btnEditUser.style.display = 'block';
    btnAddUser.style.display = 'none';

    const td = button.parentNode.parentNode;
    const object = arr[td.rowIndex];
    loginInput.value = object.login;
    passwordInput.value = object.password;
    emailInput.value = object.email;
    currentObjIndex = td.rowIndex;

    render();

    const btnsEdit = document.querySelectorAll('.btnEdit');
    Array.from(btnsEdit).forEach(editUser);
    const buttons = document.querySelectorAll('.btnDelete');
    Array.from(buttons).forEach(deleteElem);
  };
}

btnEditUser.addEventListener('click', (event) => {
  event.preventDefault();

  btnEditUser.style.display = 'none';
  btnAddUser.style.display = 'block';
  let currentObj = arr[currentObjIndex];
  currentObj.login = loginInput.value;
  currentObj.password = passwordInput.value;
  currentObj.email = emailInput.value;

  formInfo.reset();

  render();

  const btnsEdit = document.querySelectorAll('.btnEdit');
  Array.from(btnsEdit).forEach(editUser);

  const buttons = document.querySelectorAll('.btnDelete');
  Array.from(buttons).forEach(deleteElem);
})
