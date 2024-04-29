const users = [
  {
    name: 'Carlos',
    password: '1234',
  },
  {
    name: 'Ana',
    password: '4321',
  },
];

const verificarCredencials = (nomUsuari, contrasenya) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((user) => user.name === nomUsuari);
      if (user) {
        if (user.password === contrasenya) {
          resolve(`Benvingut/da ${nomUsuari}`);
        } else {
          reject('Contrasenya incorrecte');
        }
      } else {
        reject('Usuari incorrecte');
      }
    }, 2000);
  });
};

const accedirZonaRestringida = async () => {
  try {
    const result = await verificarCredencials('Carlos', '1234');
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

accedirZonaRestringida();

const main = () => {
  accedirZonaRestringida();
};
