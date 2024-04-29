// si no te'n surts llegint les dades des de l'API, pots fer servir aquesta
// variable que conté les mateixes dades i que pots consultar a data.js
const clubLecturaData = require('./data.js');

async function request() {
  try {
    const res = await clubLecturaData;
    //const data = await res.json();
    //console.log(res);
    return res;
  } catch (e) {
    console.error('Error', e);
  }
}
//request();

async function numeroLlibres() {
  try {
    const dades = await request();
    const dadesMap = dades.llibres.length; //Agafem la cuantiat de elements de l'array
    console.log('count', dades.llibres.length);
    return dadesMap;
  } catch (e) {
    console.error('Error', e);
  }
}
//numeroLlibres();

async function llibresPerGenere(genera) {
  try {
    const dades = await request();
    const dadesMap = dades.llibres.map((l) => ({
      //Fem un map per agafar les dades
      titol: l.titol,
      genera: l.genere,
    }));

    const llibresFiltrats = dadesMap.filter(
      //Filtrem els genere
      (gender) => gender.genera === genera
    );
    console.log('llibresFiltrats', llibresFiltrats);
    return llibresFiltrats;
  } catch (e) {
    console.error('Error', e);
  }
}
//llibresPerGenere('Ficció');

async function dataPublicacioLlibre(titol) {
  try {
    const dades = await request();
    const dadesMap = dades.llibres.map((l) => ({
      //Agafem les dades amb un map
      titol: l.titol,
      publicat: l.publicat,
    }));

    const llibresFiltrats = dadesMap.filter((pub) => pub.titol == titol); //filtrem el titol amb el titol que ens passen
    const data = llibresFiltrats.map((d) => d.publicat); //Guardem la data accedint al objecte.
    console.log(data);
    return data;
  } catch (e) {
    console.error('Error', e);
  }
}
//dataPublicacioLlibre('Nada');

async function autorLlibre(titol) {
  try {
    const dades = await request();
    const filterLlibre = dades.llibres.filter((p) => p.titol == titol); //Filtrem el llibre per titol
    const getIdAutor = filterLlibre.map((t) => t.autorId); //Agafem el id del autor
    const filterAutorLlibres = dades.llibres.filter(
      // Filtrem el id del autor
      (l) => getIdAutor == l.autorId
    );
    const getNotes = filterAutorLlibres.map((n) => n.nota); //Agafem les notes dels llibres filtrats
    const countArray = getNotes.length; //Agafem el total de llibres
    const calculateNota = getNotes.reduce((t, i, x) => t + i / countArray, 0); //Fem un reduce per sumar i fer la mitjana del llibre
    const filterAutor = dades.autors.filter((t) => t.id == getIdAutor); //Filtrem el autor
    const getNom = filterAutor.map((n) => n.nom); //Agafem el nom del autor
    const object = {
      //I hu guardem en un objecte
      autor: getNom,
      valoracioMitjana: calculateNota,
    };
    console.log(object);
    return object;
  } catch (e) {
    console.error('Error', e);
  }
}

//autorLlibre('La granja dels animals');

async function libresPerAutor(autor) {
  try {
    const dades = await request();
    const filteredAutor = dades.autors.filter((a) => a.nom == autor);
    const getId = filteredAutor.map((a) => a.id);
    const getLlibres = dades.llibres.filter((l) => getId == l.autorId);
    console.log(getLlibres);
    return getLlibres;
  } catch (e) {
    console.error('Error', e);
  }
}
//libresPerAutor('George Orwell');

async function llibresPerValoracio(valoracio) {
  try {
    const dades = await request();
    const filterValoracio = dades.llibres.filter((l) => l.nota == valoracio);
    const getIdAutor = filterValoracio.map((a) => a.autorId);

    const filtAutor = getIdAutor.map((e) => {
      const filteredAutors = dades.autors.filter((a) => a.id == e);
      return filteredAutors;
    });
    //const filterAutors = dades.autors.filter((a) => a.id == getIdAutor);
    console.log(filtAutor);
    return filtAutor;
  } catch (e) {
    console.error('Error', e);
  }
}
llibresPerValoracio(5);
const swapi = {
  request,
};
