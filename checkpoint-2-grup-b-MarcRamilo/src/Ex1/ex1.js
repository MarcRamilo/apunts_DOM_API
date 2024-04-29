function descarregarDades(callback) {
  setTimeout(() => {
    const dades = 'Dades descarregades';
    callback(null, dades);
  }, 2000);
}

descarregarDades((error, dades) => {
  if (error) {
    console.error('Error descarregant dades:', error);
  } else {
    console.log(dades);
  }
});

// Per provar el codi amb Node, al terminal (si estàs a l'arrel del projecte) executa: node src/UF1/exUF1.js

// Comença a escriure les teves respostes aqui:

//1. Comenta: Per què aquesta funció és asíncrona? Què és el que fa que ho sigui?

//RESPOSTA: És asyncrona perquè la funció funciona amb una estructura simulant una petició, amb una callback i una petició simulada amb setTimeout

//Exercici 2
function descarregarDadesPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dades = 'Dades descarregades';
      dades ? resolve(dades) : reject('Error descarregant dades:', error);
    });
  });
}

descarregarDadesPromise()
  .then((dades) => {
    console.log(dades);
  })
  .catch((error) => {
    console.error('Error descarregant dades:', error);
  });

descarregarDadesPromise();

//Exercici 3

async function obtenirDadesAsyn() {
  try {
    const dades = await descarregarDadesPromise();
    console.log(dades);
  } catch (e) {
    console.error('Error', e);
  }
}

obtenirDadesAsyn();
