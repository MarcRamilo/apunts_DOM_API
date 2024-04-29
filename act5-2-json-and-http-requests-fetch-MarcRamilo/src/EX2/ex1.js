const getData = (URL) => {
  return new Promise((resolve, reject) => {
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Data:', data);
        resolve(data);
      })
      .catch((error) => {
        console.error('Error:', error);
        reject(error);
      });
  });
};

// getData(
//   'https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/59057?nult=10'
// ).then(
//   (data) => {
//     console.log('Dades:', data);
//   },
//   (error) => {
//     console.error('Error:', error);
//   }
// );

// https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/59057?nult=10

async function getRentPrices(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

const showRentPrices = (data) => {
  // Obtenir les dades que contenen "Nombre: Cataluña"
  const dataCatalunya = data.filter((element) =>
    element.Nombre.includes('Cataluña. Total')
  );

  // Obtenir els divs de la secció de dades
  const divIndex = document.querySelectorAll('.contenidor > div');

  // Crear els elements de la llista per l'índex i la variació anual
  const ulElementVariation = document.createElement('ul');
  const ulElementIndex = document.createElement('ul');

  // Recórrer les dades de Catalunya i afegir-les a les llistes corresponents
  dataCatalunya.forEach((element) => {
    element.Data.forEach((entry) => {
      const liElement = document.createElement('li');

      // Comprovar si es tracta de l'índex o la variació anual
      if (element.Nombre.includes('Variación anual')) {
        liElement.textContent = `Variación Anual (${entry.Anyo}): ${entry.Valor}`;
        ulElementVariation.appendChild(liElement);
      } else if (element.Nombre.includes('Índice')) {
        liElement.textContent = `Índice (${entry.Anyo}): ${entry.Valor}`;
        ulElementIndex.appendChild(liElement);
      }
    });
  });

  // Afegir les llistes als divs corresponents
  divIndex[0].appendChild(ulElementVariation);
  divIndex[1].appendChild(ulElementIndex);
};
const getIPC = async () => {
  try {
    const response = await fetch(
      'https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/50934?nult=10'
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching IPC data:', error);
    return [];
  }
};

const showIPC = async () => {
  const ipcData = await getIPC();
  const select = document.getElementById('ipc-selector');

  // Esborrem les opcions anteriors del selector
  select.innerHTML = '';

  // Afegim les noves opcions basades en les dades de l'IPC
  ipcData.forEach((item) => {
    const option = document.createElement('option'); // Creem una nova opció
    option.textContent = item.Nombre.replace('Total Nacional.', ''); //Option sense Total Nacional
    option.value = item.COD; // Codi de l'índex com a valor de l'opció
    select.appendChild(option); // Afegim l'opció al selector
  });

  // Afegim un listener d'esdeveniments al selector per mostrar el gràfic quan es selecciona un element
  select.addEventListener('change', () => {
    const selectedIPC = select.value;
    if (selectedIPC) {
      showChart(selectedIPC, ipcData);
    }
  });
};

const showChart = (selectedIPC, ipcData) => {
  const selectedData = ipcData.find((item) => item.COD === selectedIPC); // Trobem les dades de l'índex seleccionat a partir del seu codi
  const ctx = document.getElementById('myChart').getContext('2d'); // Obtenim el contexte del canvas per a crear el gràfic amb Chart.js

  if (chart) {
    chart.destroy(); // Si ja existeix un gràfic, el destruïm abans de crear-ne un de nou
  }

  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: selectedData.Data.map((entry) => entry.Anyo.toString()).reverse(), // Any com a cadena
      datasets: [
        {
          label: selectedData.Nombre,
          data: selectedData.Data.map((entry) => entry.Valor), // Valors de l'índex per a cada any
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: false,
        },
      },
    },
  });
};

// Crida showIPC per iniciar el procés

let chart = null; // Declarem una variable global per a guardar el gràfic

const main = async () => {
  try {
    const data = await getRentPrices(
      'https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/59057?nult=10'
    );
    showRentPrices(data);
  } catch (error) {
    console.error('Error in main:', error);
  }
};

main();
showIPC();
