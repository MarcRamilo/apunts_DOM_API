// Ex5 - Creant una taula
// Considera el següent array d'objectes:

var languages = [
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

function tableCreator(dataArray, targetElement) {
  // Create table elements
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  // Create header row
  const headerRow = document.createElement('tr');
  const data = Object.keys(dataArray[0]);
  data.forEach((headerText) => {
    const th = document.createElement('th');
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);

  // Create body rows
  dataArray.forEach((item) => {
    const tr = document.createElement('tr');
    Object.values(item).forEach((text) => {
      const td = document.createElement('td');
      td.textContent = text;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });

  // Append thead and tbody to table
  table.appendChild(thead);
  table.appendChild(tbody);

  // Append table to target element
  if (targetElement) {
    targetElement.appendChild(table);
  } else {
    console.error('Target element not found');
  }
//   add css to the table
    table.style.border = '1px solid black';
    table.style.borderCollapse = 'collapse';
    thead.style.backgroundColor = 'lightgrey';
    thead.style.border = '1px solid black';
    tbody.style.border = '1px solid black';
    tbody.style.borderTop = 'none';
    tbody.style.borderCollapse = 'collapse';
    tbody.style.backgroundColor = 'white';
    tbody.style.borderSpacing = '0';
    thead.style.borderSpacing = '0';
    thead.style.borderTop = 'none';
    thead.style.borderBottom = '1px solid black';
    thead.style.borderSpacing = '0';
    thead.style.textAlign = 'left';
    thead.style.fontWeight = 'bold';
    thead.style.fontSize = '1.2em';
    tbody.style.borderSpacing = '0';
    tbody.style.textAlign = 'left';
    tbody.style.fontSize = '1.1em';
    tbody.style.borderSpacing = '0';
    tbody.style.borderTop = 'none';
    tbody.style.borderBottom = '1px solid black';
    tbody.style.borderSpacing = '0';
    tbody.style.borderCollapse = 'collapse';
    tbody.style.borderSpacing = '0';
    
   
}

// Call the function
document.addEventListener('DOMContentLoaded', (event) => {
  tableCreator(languages, document.getElementById('table-container'));
});
