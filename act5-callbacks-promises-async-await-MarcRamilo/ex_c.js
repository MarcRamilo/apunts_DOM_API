// c. Utilitzant Async/Await
// Crea un arxiu ex_c.js. Modifica el codi anterior per fer servir async/await. És possible que hagis de crear una funció addicional
//per gestionar la funció async. Explica línia a línia quins canvis has realitzat directament dins del codi.

const findOne = (list, searchParams) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //list = users, searchParams = {name: 'Carlos'}, callbacks = {onSuccess, onError}
      const found = list.find((item) => {
        //item = {name: 'Carlos', rol: 'Teacher'}
        for (const key in searchParams) {
          //key = name
          if (item[key] !== searchParams[key]) {
            // item[key] = item[name] = 'Carlos', searchParams[key] = searchParams[name] = 'Carlos'
            return false;
          }
        }
        return true;
      });
      if (found) {
        resolve(found); //found = {name: 'Carlos', rol: 'Teacher'}
      } else {
        reject("Element Not Found"); //error = 'Element Not Found'
      }
    });
  }, 2000);
};

const users = [
  {
    name: "Carlos",
    rol: "Teacher",
  },
  {
    name: "Ana",
    rol: "Boss",
  },
];

async function asyncFindOne() {
  try {
    const user = await findOne(users, { name: "Carlos" });
    console.log(`user: ${user.name}`);
  } catch (error) {
    console.error(`ERROR: ${error}`);
  }
}

async function asyncFindOne2() {
  try {
    const user = await findOne(users, { name: "Fermin" });
    console.log(`user: ${user.name}`);
  } catch (error) {
    console.error(`ERROR: ${error}`);
  }
}

asyncFindOne();
asyncFindOne2();

// ----------------SOLUCIÓ--------------------



// -------------------------------------------