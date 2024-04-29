// c. Utilitzant Async/Await
// Crea un arxiu ex_c.js. Modifica el codi anterior per fer servir async/await. És possible que hagis de crear una funció addicional
//per gestionar la funció async. Explica línia a línia quins canvis has realitzat directament dins del codi.

// const findOne = (list, searchParams) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const found = list.find((item) => {
//           for (const key in searchParams) {
//             if (item[key] !== searchParams[key]) {
//               return false;
//             }
//           }
//           return true;
//         });
//         if (found) {
//           resolve(found);
//         } else {
//           reject("Element Not Found");
//         }
//       }, 2000);
//     });
//   };

//   const users = [
//     {
//       name: "Carlos",
//       rol: "Teacher",
//     },
//     {
//       name: "Ana",
//       rol: "Boss",
//     },
//   ];

//   async function asyncFindOne() {
//     try {
//       const user = await findOne(users, { name: "Carlos" });
//       console.log(`user: ${user.name}`);
//     } catch (error) {
//       console.error(`ERROR: ${error}`);
//     }
//   }

//   async function asyncFindOne2() {
//     try {
//       const user = await findOne(users, { name: "Fermin" });
//       console.log(`user: ${user.name}`);
//     } catch (error) {
//       console.error(`ERROR: ${error}`);
//     }
//   }

//   async function asyncFindOne3() {
//     try {
//       const user = await findOne(users, { name: "Ana" });
//       console.log(`user: ${user.name}`);
//     } catch (error) {
//       console.error(`ERROR: ${error}`);
//     }
//   }

// ----------------SOLUCIÓ--------------------
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

const findOne = (list, { key, value }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Buscnat ${value}`);
      const element = list.find((e) => e[key] === value);
      element ? resolve(element) : reject(`Element not Found, ${value} is not in the list`);
    }, 2000);
  });
};

async function asyncFindOne() {
  try {
    const user = await Promise.all([
      findOne(users,{key:'name', value:'Carlos'}),
      findOne(users,{key:'name', value:'Fermin'}),
      findOne(users,{key:'name', value:'Ana'})
    ]);
    console.log(user);
} catch (e){
  console.log(e);
}
}
asyncFindOne();


// Una Promise que se cumplirá cuando todas las promesas del argumento iterable hayan sido cumplidas,
//o bien se rechazará cuando alguna de ellas se rechace.

// Amb promise allSetlled
async function asyncFindOneSetlled() {
  try {
    const user = await Promise.allSettled([
      findOne(users,{key:'name', value:'Carlos'}),
      findOne(users,{key:'name', value:'Fermin'}),
      findOne(users,{key:'name', value:'Ana'})
    ]);
    console.log(user);
} catch (e){
  console.log(e);
}
}
asyncFindOneSetlled();


// -------------------------------------------
