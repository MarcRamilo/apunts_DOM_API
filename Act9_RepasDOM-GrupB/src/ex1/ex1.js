const fruitList = ['apple', 'banana', 'orange', 'grape', 'strawberry'];

const ulElement = document.querySelector('ul');

fruitList.forEach((fruit) => {
  // 1r. Genero l'element LI
  const liElement = document.createElement('li');
  // 2n. Introdueixo els continguts de cada element
  liElement.textContent = fruit;
  // 3r. Els injecto a la llista UL
  ulElement.appendChild(liElement);
});
