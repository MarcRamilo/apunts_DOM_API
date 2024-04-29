//El codi que ha de fer servir callbacks per dur a terme una tasca després de cercar un element en un array amb la funció find. Modifica ex_a.js i AFEGEIX ELS COMENTARIS QUE EXPLIQUEN I T'AJUDEN A ENTENDRE cada línia de codi i destaca l'ús del callback i el valor mostrat per pantalla.
/*
findOne success
findOne error
 //wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/

// const findOne = (list, searchParams, callbacks) => {
//   //list = users, searchParams = {name: 'Carlos'}, callbacks = {onSuccess, onError}
//   setTimeout(() => {
//     const found = list.find((item) => {
//       //item = {name: 'Carlos', rol: 'Teacher'}

//       for (const key in searchParams) {
//         //key = name
//         if (item[key] !== searchParams[key]) {
//           // item[key] = item[name] = 'Carlos', searchParams[key] = searchParams[name] = 'Carlos'
//           return false;
//         }
//       }
//     });
//     return true;
//   }, 2000);

//   if (found) {
//     callbacks.onSuccess(found); //found = {name: 'Carlos', rol: 'Teacher'}
//   } else {
//     callbacks.onError("Element Not Found"); //error = 'Element Not Found'
//   }
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
// findOne(
//   users,
//   { name: "Carlos" },
//   {
//     onSuccess: (user) => {
//       console.log(`user: ${user.name}`); //user = {name: 'Carlos', rol: 'Teacher'}
//     },
//     onError: (error) => {
//       console.error(`ERROR: ${error}`); //error = 'Element Not Found'
//     },
//   }
// );

// console.log("findOne error");
// findOne(
//   users,
//   { name: "Fermin" },
//   {
//     onSuccess: (user) => {
//       console.log(`user: ${user.name}`); //user = {name: 'Carlos', rol: 'Teacher'}
//     },
//     onError: (error) => {
//       console.error(`ERROR: ${error}`); //error = 'Element Not Found'
//     },
//   }
// );

// ----------------SOLUCIÓ--------------------
const findOne = (list, {name}, { onSuccess, onError }) => {
  setTimeout(() => {
    const element = list.find((e) => 
       e.name === name); 
       element ? onSuccess(element) : onError("Element not Found");
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

const onSuccess = ({ name }) => console.log(`Usuari: ${name} trobat!`); // Fixed the function name
const onError = (err) => console.log(err);

console.log("findOne success");
findOne(users, { name: "Carlos" }, { onSuccess, onError }); // Used the correct function name
console.log("findOne error");
findOne(users, { name: "Fermin" }, { onSuccess, onError }); // Used the correct function name


// ----------------SOLUCIÓ--------------------
