// si no te'n surts llegint les dades des de l'API, pots fer servir aquesta
// variable que conté les mateixes dades i que pots consultar a data.js
const clubLecturaData = require('./data.js');

// const var = 'http://localhost:3000/';

async function request(vari) {
  try {
    const response = await fetch(`http://localhost:3000/${vari}`);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}
// request('llibres');

async function numeroLlibres() {
  try {
    const Llibres = await request('llibres');
    console.log(Llibres.length);
    return Llibres.length;
  } catch (error) {
    console.error(error);
  }
}

// numeroLlibres();

async function llibresPerGenere(genere) {
  try {
    const llibres = await request('llibres');
    const llibresFilter = llibres.filter((i) => i.genere === genere);
    const titols = llibresFilter.map((i) => i.titol);
    console.log(titols);
    return titols;
  } catch (error) {
    console.error(error);
  }
}
// llibresPerGenere("Ficció");

async function dataPublicacioLlibre(titol) {
  try {
    const llibres = await request('llibres');
    const llibreFiltrat = llibres.find((i) => i.titol === titol);
    const data = llibreFiltrat.publicat;
    // 1605-01-16 --> 1605 01 16 // dd/mm/aaaa
    const dataSeparada = data.split('-');
    const dataJunta = dataSeparada.reverse().join('/');

    console.log(dataJunta);
  } catch (error) {
    console.error(error);
  }
}

// dataPublicacioLlibre("Don Quixot");
async function autorAmbMesLlibres() {
  try {
    const llibres = await request('llibres');
    const llibresPerAutor = {};

    llibres.forEach((i) => {
      if (llibresPerAutor[i.autorId]) {
        llibresPerAutor[i.autorId]++;
      } else {
        llibresPerAutor[llibre.autorId] = 1;
      }
    });

    let maxLlibres = 0;

    let arrayAutors = [];

    for (const idAutor in llibresPerAutor) {
      if (llibresPerAutor[idAutor] > maxLlibres) {
        maxLlibres = Llibres[idAutor];

        arrayAutors = [idAutor];
      } else if (llibresPerAutor[idAutor] === maxLlibres) {
        arrayAutors.push(idAutor);
      }
    }
    const autors = await request('autors');
    const autorsAmbMesLlibres = autors.filter((autor) =>
      idAutorsMesLlibres.includes(autor.id)
    );
    const nomsAutorsAmbMesLlibres = autorsAmbMesLlibres.map(
      (autor) => autor.nom
    );
    return nomsAutorsAmbMesLlibres;
  } catch (error) {
    console.error(error);
  }
}

async function autorLlibre(titol) {
  const llibres = await request('llibres');
  const llibresFiltred = llibres.find((i) => i.titol === titol);
  // console.log(llibresFiltred);
  const idAutor = llibresFiltred.autorId;
  // console.log(idAutor);
  const idAutorString = idAutor.toString();
  // console.log(idAutorString);
  const autors = await request('autors');
  const autorsFiltered = autors.find((i) => i.id === idAutorString);
  // console.log(autorsFiltered);

  // 7 + 5 + 5
  // 7 + 5 / 3
  const llibresFiltredobj = llibres.filter((i) => i.autorId === idAutor);
  console.log(llibresFiltredobj);
  const valMitj =
    llibresFiltredobj.reduce((a, b) => a + b.nota, 0) /
    llibresFiltredobj.length;
  // console.log(valMitj);
  const obj = {
    autor: autorsFiltered.nom,
    valoracioMitjana: valMitj,
  };

  // filtered --> [{}] --> map
  // find --> {} --> x.y

  console.log(obj);
  return obj;
}

// autorLlibre("Don Quixot")

async function llibresPerAutor(varautor) {
  const llibres = await request('llibres');
  const autorId = llibres.filter((i) => i.autorId === varautor);
  console.log(autorId);
  const MostrarTitul = autorId.map((i) => i.titol);
  console.log(MostrarTitul);
  return MostrarTitul;
}
// llibresPerAutor(3);

async function llibresPerValoracio(valoracio) {
  const llibres = await request('llibres');
  const llibresValuracio = llibres.filter((i) => i.nota === valoracio);
  console.log(llibresValuracio);
  const array = llibresValuracio.map((aveure) => ({
    titol: aveure.titol,
    autor: aveure.autorId,
    valoracio: aveure.nota,
  }));
  // .map((i) => ({}))
  console.log(array);
  return array;
}
llibresPerValoracio(3);




const swapi = {
  request,
};
