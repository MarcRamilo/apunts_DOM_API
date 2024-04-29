// Obtenim l'element de l'HTML on afegirem els continguts
const app = document.querySelector('#list-app');

// Creem els NOUS elements necessaris
const list = document.createElement('ul');
app.appendChild(list);
const input = document.createElement('input');
input.type = 'text';
// input.setAttribute('type', 'text').
const addButton = document.createElement('button');
addButton.innerHTML = 'Crear Nou';

// Afegim event listeners als elements
addButton.addEventListener('click', () => {
  // 1. Primer he de crear l'element on posaré la informació
  const newItem = document.createElement('li');
  // 2. Afegiré el valor que hagi escrit l'usuari dins l'Input a aquest nou element (LI)
  newItem.innerHTML = input.value;
  // 3. Injecto (appendChild) el nou LI a la llista UL.
  list.appendChild(newItem);
  // 4. Finalment netejo el valor de l'input.
  input.value = '';
});

// En el cas de clickar sobre un element de la llista, l'usuari ha de poder modificar aquesta
list.addEventListener('click', (event) => {
  console.dir(event);
  // Per poder fer la comparació amb tagName, s'ha de fer amb LI en majúscula.
  if (event.target.tagName === 'LI') {
    const text = prompt('Introdueix el nou text:');
    event.target.innerHTML = text;
  }
});

// app.appendChild(input);
// app.appendChild(addButton);
app.append(input, addButton);
