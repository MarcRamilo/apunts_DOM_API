// querySelectoAll em retorna un "NodeList" que puc iterar després com si fos un array (forEach)
const firstList = document.querySelectorAll('li:first-child');
const lastList = document.querySelectorAll('li:last-child');

//console.dir(firstList);
firstList.forEach((li) => (li.textContent = 'primer'));
lastList.forEach((li) => (li.textContent = 'últim'));
