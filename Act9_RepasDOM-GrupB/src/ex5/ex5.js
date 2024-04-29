const languages = [
  {
    name: 'JavaScript',
    releaseDate: 1995,
    fileExtension: '.js',
    creator: 'Brendan Eich',
  },
  {
    name: 'Java',
    releaseDate: 1995,
    fileExtension: '.java',
    creator: 'James Gosling',
  },
  {
    name: 'PHP',
    releaseDate: 1995,
    fileExtension: '.php',
    creator: 'Rasmus Lerdorf',
  },
  {
    name: 'C++',
    releaseDate: 1985,
    fileExtension: '.cpp',
    creator: 'Bjarne Stroustrup',
  },
];

// Table structure in html
// <table>
//   <thead>
//     <tr>
//       <th>Language</th>
//       <th>Year</th>
//       <th>File Extension</th>
//       <th>Creator</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>JavaScript</td>
//       <td>1995</td>
//       <td>.js</td>
//       <td>Brendan Eich</td>
//     </tr>
//     <tr>
//       <td>Java</td>
//       <td>1995</td>
//       <td>.java</td>
//       <td>James Gosling</td>
//     </tr>
//     ...
//   </tbody>
// </table>

function tableCreator(dataArray, targetElement) {
  // Crea els elements de la taula
  const table = document.createElement('table');

  const theadElement = document.createElement('thead');
  table.appendChild(theadElement);
  // Recursivament creem els elements de la capçalera que injectarem dins el tr
  const trElement = document.createElement('tr');
  for (const key in dataArray[0]) {
    const thElement = document.createElement('th');
    thElement.innerHTML = key;
    trElement.appendChild(thElement);
  }
  // Ara ja tenim construït el nostre tr, l'injectem al thead
  theadElement.appendChild(trElement);
  // Ja tenim la nostra capçalera preparada.

  // Ara ens toca omplir el cos de la taula
  const tbodyElement = document.createElement('tbody');
  for (const element of dataArray) {
    //...
    // Crear l'element per a cada nova fila
    const trElement = document.createElement('tr');

    for (const key in element) {
      //...
      // Crear cada element td per cada valor de la columna
    }
  }

  targetElement.appendChild(table);
}

// Crida a la funció
tableCreator(languages, document.getElementById('table-container'));
