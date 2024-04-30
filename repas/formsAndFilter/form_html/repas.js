document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const submitBtn = document.getElementById("submit-btn");
  const mainListTable = document.getElementById("main-list");
  const filteredListTable = document.getElementById("filtered-list");
  const filterSubmitBtn = document.getElementById("filterSubmitBtn");
  const filterEmailInput = document.getElementById("filterEmail");

  submitBtn.addEventListener("click", submitForm);
  filterSubmitBtn.addEventListener("click", filterByEmail);

  function submitForm() {
    const nom = document.getElementById("nom").value;
    const cognom = document.getElementById("cognom").value;
    const dataNaixement = document.getElementById("dataNaixement").value;
    const email = document.getElementById("email").value;
    const checkbox = document.getElementById("checkbox").checked;
    const select = document.getElementById("select").value;

    // Validaciones
    const validEmail = validateEmail(email);
    const validDate = validateDate(dataNaixement);

    if (!validEmail) {
      alert("Email no válido");
      return;
    }

    if (!validDate) {
      alert("Fecha de nacimiento no válida");
      return;
    }

    // Verificar si el correo electrónico ya está registrado
    if (isEmailRegistered(email)) {
      alert("El correo electrónico ya está registrado");
      return;
    }
    // Guardar en la sesión del navegador
    sessionStorage.setItem("nom", nom);
    sessionStorage.setItem("cognom", cognom);
    sessionStorage.setItem("dataNaixement", dataNaixement);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("checkbox", checkbox);
    sessionStorage.setItem("select", select);

    // Crear usuario
    const user = {
      nom: nom,
      cognom: cognom,
      dataNaixement: dataNaixement,
      email: email,
      checkbox: checkbox,
      select: select,
    };

    // Crear fila en la lista principal
    const tr = createTableRow(user);
    mainListTable.appendChild(tr);

    // Resetear formulario
    form.reset();
  }

//   function filterByEmail() {
//     const filterEmail = filterEmailInput.value.trim().toLowerCase();
//     const users = JSON.parse(sessionStorage.getItem("users")) || [];

//     // Limpiar la lista filtrada
//     filteredListTable.innerHTML = "";

//     // Filtrar por correo electrónico
//     if (!filterEmail) {
//       return; // Si el filtro está vacío, no hacer nada
//     }

//     const filteredUsers = filterUsersByEmail(users, filterEmail);

//     if (filteredUsers.length === 0) {
//       const tr = document.createElement("tr");
//       const td = document.createElement("td");
//       td.textContent = "No se encontraron usuarios con ese correo electrónico.";
//       tr.appendChild(td);
//       filteredListTable.appendChild(tr);
//     } else {
//       filteredUsers.forEach((user) => {
//         const tr = createTableRow(user);
//         filteredListTable.appendChild(tr);
//       });
//     }
//   }
function filterByEmail() {
    const filterEmail = filterEmailInput.value.trim().toLowerCase();
    const mainListRows = mainListTable.querySelectorAll('tr');
    const users = JSON.parse(sessionStorage.getItem('users')) || [];

    // Limpiar la lista filtrada
    filteredListTable.innerHTML = '';

    // Filtrar por correo electrónico en la lista principal
    const filteredMainList = Array.from(mainListRows).filter(row => {
        const rowData = row.querySelectorAll('td');
        const email = rowData[3].textContent.trim().toLowerCase();
        return email.includes(filterEmail);
    });

    // Mostrar coincidencias encontradas en la lista principal
    filteredMainList.forEach(row => {
        const cloneRow = row.cloneNode(true);
        filteredListTable.appendChild(cloneRow);
    });

    // Filtrar por correo electrónico en los usuarios almacenados
    const filteredUsers = users.filter(user => user.email.toLowerCase().includes(filterEmail));

    if (filteredUsers.length === 0 && filteredMainList.length === 0) {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.textContent = 'No se encontraron usuarios con ese correo electrónico.';
        tr.appendChild(td);
        filteredListTable.appendChild(tr);
    } else {
        filteredUsers.forEach(user => {
            const tr = createTableRow(user);
            filteredListTable.appendChild(tr);
        });
    }
}
  //   // Función para verificar si el correo electrónico ya está registrado
  //   function isEmailRegistered(email) {
  //     const users = JSON.parse(sessionStorage.getItem("users")) || [];
  //     return users.some((user) => user.email === email);
  //   }
  function isEmailRegistered(email) {
    const tableRows = mainListTable.querySelectorAll("tr");
    for (let i = 0; i < tableRows.length; i++) {
      const rowData = tableRows[i].querySelectorAll("td");
      if (rowData[3].textContent.trim() === email) {
        return true; // Correo electrónico encontrado en la tabla
      }
    }
    return false; // Correo electrónico no encontrado en la tabla
  }
  // Función para filtrar usuarios por correo electrónico
  function filterUsersByEmail(users, filterEmail) {
    return users.filter((user) =>
      user.email.toLowerCase().includes(filterEmail)
    );
  }

  // Función para crear una fila de tabla con los datos del usuario
  function createTableRow(user) {
    const tr = document.createElement("tr");

    appendCell(tr, user.nom);
    appendCell(tr, user.cognom);
    appendCell(tr, user.dataNaixement);
    appendCell(tr, user.email);
    appendCell(tr, user.checkbox);
    appendCell(tr, user.select);

    return tr;
  }

  // Función para crear una celda de tabla y agregarla a una fila
  function appendCell(row, text) {
    const td = document.createElement("td");
    td.textContent = text;
    row.appendChild(td);
  }

  // Función para validar el email
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  // Función para validar la fecha de nacimiento (formato yyyy-mm-dd)
  function validateDate(date) {
    const re = /^\d{4}-\d{2}-\d{2}$/;
    return re.test(date);
  }
});
