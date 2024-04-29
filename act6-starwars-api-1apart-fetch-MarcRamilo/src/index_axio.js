import {
  getMovieCount,
  listMovies,
  listMoviesSorted,
  listEvenMoviesSorted,
  getMovieInfo,
  getCharacterName,
  getMovieCharacters,
  getMovieCharactersAndHomeworlds,
  createMovie
} from "./swapi_axio.js";

// Aquest index només serveix per provar algunes funcions si vols fer ús de la consola
// per provar les funcions que has creat.

async function main() {
  try {
    const numberOfMovies = await getMovieCount();
    console.log("getMovieCount",numberOfMovies);
    // const movieList = await listMovies();
    // console.log("listMovies",movieList);
    // const listMoviesSort = await listMoviesSorted();
    // console.log("listMoviesSorted",listMoviesSort);
    // const listEvenMoviesSortedById = await listEvenMoviesSorted();
    // console.log("listEvenMoviesSorted",listEvenMoviesSortedById);
    const getMovieInfoById = await getMovieInfo(4);
    console.log("getMovieInfo",getMovieInfoById);
    // const getCharacterByName = await getCharacterName(
    //   "https://swapi.info/api/people/1"
    // );
    // console.log("getCharacterName",getCharacterByName);
    // const getMovieCharactersById = await getMovieCharacters(4);
    // console.log("getMovieCharacters",getMovieCharactersById);
    // const getMovieCharactersAndHomeworldsById= await getMovieCharactersAndHomeworlds(4);
    // console.log("getMovieCharactersAndHomeworldsById", getMovieCharactersAndHomeworldsById);
    // const charctersCreate = await createMovie(4);
    // console.log("createMovie", charctersCreate);
  } catch (error) {
    console.error(error);
  }
}

main();

export default main;
