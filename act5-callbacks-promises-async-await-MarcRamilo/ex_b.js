// B. Utilitzant Promeses
// Crea un arxiu ex_b.js. Modifica el codi anterior per eliminar els callbacks i utilitzar en el seu lloc promeses.
// Hauràs de crear-les dins de la funció findOne i consumir-les al codi principal utilitzant les paraules reservades then i catch.
// Documenta les línies de codi, explicant quins canvis has realitzat.

// const findOne = (list, searchParams) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const found = list.find((item) => {
//         for (const key in searchParams) {
//           if (item[key] !== searchParams[key]) {
//             return false;
//           }
//         }
//         return true;
//       });

//       if (found) {
//         resolve(found);
//       } else {
//         reject("Element Not Found");
//       }
//     });
//   }, 2000);
// };

// const users = [
//   {
//     name: "Carlos",
//     rol: "Teacher",
//   },
//   {
//     name: "Ana",
//     rol: "Boss",
//   },
// ];

// console.log("findOne success");
// findOne(users, { name: "Carlos" })
//   .then((user) => {
//     console.log(`user: ${user.name}`); //user = {name: 'Carlos', rol: 'Teacher'}
//   })
//   .catch((error) => {
//     console.error(`ERROR: ${error}`);
//   });

// console.log("findOne error");
// findOne(users, { name: "Fermin" })
//   .then((user) => {
//     console.log(`user: ${user.name}`); //user = {name: 'Femin', rol: 'Teacher'}
//   })
//   .catch((error) => {
//     console.error(`ERROR: ${error}`);
//   });

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


const findOne = (list, { name }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const element = list.find((e) => e.name === name);
      element ? resolve(element) : reject("Element not Found");
    }, 2000);
  });
};

console.log("findOne success");
findOne(users, { name: "Carlos" })
  .then((user) => {
    console.log(`user: ${user.name}`); //user = {name: 'Carlos', rol: 'Teacher'}
  })
  .catch((error) => {
    console.error(`ERROR: ${error}`);
  });

console.log("findOne error");
findOne(users, { name: "Fermin" })
  .then((user) => {
    console.log(`user: ${user.name}`); //user = {name: 'Femin', rol: 'Teacher'}
  })
  .catch((error) => {
    console.error(`ERROR: ${error}`);
  });





// -------------------------------------------
