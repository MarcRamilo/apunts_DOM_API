// const clubLecturaData = require('./data.js');

async function request(vari) {
  try {
    const response = await fetch(`http://localhost:3000/${vari}`);
    const data = await response.json();
    const dataTitol = data.map((i) => i.titol);
    // console.log(dataTitol);
    return dataTitol;
  } catch (error) {
    console.error(error);
  }
}
let valors = [];
async function getValors() {
  valors = await request('llibres');
  console.log(valors);
}
getValors();
console.log(valors);
//Creem un selector per agafar el ul del html per ID
const ulSelector = document.getElementById('people-list');
console.log(ulSelector);
//Crear una llista agafant les dades de la API i mostrar-les

const addButton = document.createElement('button');
addButton.innerHTML = 'Llistar';

const modifyButton = document.createElement('button');
modifyButton.innerHTML = 'Modificar';
const input = document.createElement('input');
input.type = 'text';
const createButton = document.createElement('button');
createButton.innerHTML = 'Crear';
// Crear un div per a la llista
const listContainer = document.createElement('div');
document.body.appendChild(addButton);
document.body.appendChild(input);
document.body.appendChild(createButton);
document.body.appendChild(listContainer);

addButton.addEventListener('click', async (event) => {
  // Esperar fins que es rebin les dades abans de mostrar la llista
  await getValors();

  // Esborrar les anteriors entrades de la llista abans d'afegir-ne de noves
  listContainer.innerHTML = '';

  // Afegir cada valor de la llista com un element de la llista HTML
  valors.forEach((i) => {
    const liElement = document.createElement('li');
    liElement.innerHTML = i;
    const removeButton = document.createElement('button');
    removeButton.innerHTML = 'Eliminar';

    removeButton.addEventListener('click', function () {
      listContainer.removeChild(liElement);
    });

    liElement.appendChild(removeButton);

    listContainer.appendChild(liElement);
  });
});

listContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
      const text = prompt('Introduexi el nou text: ');
      event.target.innerHTML = text;
      const removeButton = document.createElement('button');
      removeButton.innerHTML = 'Eliminar';
  
      removeButton.addEventListener('click', function () {
        listContainer.removeChild(event.target);
      });
  
      event.target.appendChild(removeButton);
    }
  });

createButton.addEventListener('click', (event) => {
  const liElement = document.createElement('li');
  liElement.innerHTML = input.value;
  listContainer.appendChild(liElement);
  const removeButton = document.createElement('button');
  removeButton.innerHTML = 'Eliminar';

  removeButton.addEventListener('click', function () {
    listContainer.removeChild(liElement);
  });

  liElement.appendChild(removeButton);
});

const swapi = {
  request,
};
