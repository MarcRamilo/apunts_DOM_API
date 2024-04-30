const div = document.querySelector('#form');

// Deja un espacio entre input e input
const addSpace = () => {
    const br = document.createElement('br');
    form.appendChild(br);
};

// Función para validar el email
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

// Función para validar la fecha de nacimiento (formato yyyy-mm-dd)
const validateDate = (date) => {
    const re = /^\d{4}-\d{2}-\d{2}$/;
    return re.test(date);
};

// Crear form con nombre, apellido, fecha de nacimiento, email, checkbox, select y submit
const form = document.createElement('form');
form.setAttribute('id', 'formulari');
form.setAttribute('name', 'formulari');
div.appendChild(form);

const fields = [
    { label: 'Nom:', id: 'nom', type: 'text' },
    { label: 'Cognom:', id: 'cognom', type: 'text' },
    { label: 'Data Naixement:', id: 'dataNaixement', type: 'date' },
    { label: 'Email:', id: 'email', type: 'email' },
    { label: 'Checkbox:', id: 'checkbox', type: 'checkbox' },
    { label: 'Select:', id: 'select', type: 'select', options: ['Home', 'Dona', 'No vull dir-ho'] }
];

fields.forEach(field => {
    const label = document.createElement('label');
    label.textContent = field.label;
    form.appendChild(label);

    addSpace();

    if (field.type === 'select') {
        const select = document.createElement('select');
        select.setAttribute('id', field.id);
        field.options.forEach((optionText, index) => {
            const option = document.createElement('option');
            option.setAttribute('value', index + 1);
            option.textContent = optionText;
            select.appendChild(option);
        });
        form.appendChild(select);
    } else {
        const input = document.createElement('input');
        input.setAttribute('type', field.type);
        input.setAttribute('id', field.id);
        form.appendChild(input);
    }

    addSpace();
});

const inputSubmit = document.createElement('input');
inputSubmit.setAttribute('type', 'submit');
inputSubmit.setAttribute('value', 'Enviar');
form.appendChild(inputSubmit);
//Afegir reset button
const inputReset = document.createElement('input');
inputReset.setAttribute('type', 'reset');
inputReset.setAttribute('value', 'Reset');
form.appendChild(inputReset);
// Afegir event submit
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nom = document.getElementById('nom').value;
    const cognom = document.getElementById('cognom').value;
    const dataNaixement = document.getElementById('dataNaixement').value;
    const email = document.getElementById('email').value;
    const checkbox = document.getElementById('checkbox').checked;
    const select = document.getElementById('select').options[document.getElementById('select').selectedIndex].textContent;

    // Validaciones
    const validEmail = validateEmail(email);
    const validDate = validateDate(dataNaixement);

    if (!validEmail) {
        alert('Email no válido');
        return;
    }

    if (!validDate) {
        alert('Fecha de nacimiento no válida');
        return;
    }

    // Guardar en la sesión del navegador
    sessionStorage.setItem('nom', nom);
    sessionStorage.setItem('cognom', cognom);
    sessionStorage.setItem('dataNaixement', dataNaixement);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('checkbox', checkbox);
    sessionStorage.setItem('select', select);

    // Crear tabla con los datos
    const table = document.createElement('table');
    div.appendChild(table);

    const fields = ['Nom', 'Cognom', 'Data Naixement', 'Email', 'Checkbox', 'Select'];
    fields.forEach(fieldName => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        td1.textContent = fieldName + ':';
        const td2 = document.createElement('td');
        td2.textContent = sessionStorage.getItem(fieldName.toLowerCase());
        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
    });

    // Resetear formulario
    form.reset();
});
