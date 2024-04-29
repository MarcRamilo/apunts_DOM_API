document
  .getElementById('loginForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    //Obtenir les dades del formulari
    let nom = document.getElementById('nom').value;
    let cognom = document.getElementById('cognom').value;
    let correu = document.getElementById('correu').value;
    let contrassenya = document.getElementById('contrasenya').value;
    let dni = document.getElementById('dni').value;
    let data_naixement = document.getElementById('data_naixement').value;
    let genere = document.getElementById('genere').value;
    let termes_condicions =
      document.getElementById('termes_condicions').checked;

    if (
      nom == '' ||
      cognom == '' ||
      correu == '' ||
      contrassenya == '' ||
      dni == '' ||
      data_naixement == '' ||
      genere == ''
    ) {
      alert('Tots els camps són requerits!');
      return false;
    }
    if (!termes_condicions) {
      alert('Accepta els termes i condicions!');
    }
    //check if name is valid
    if (!validarNom(nom)) {
      alert('Nom no és vàlid');
      return false;
    }
    // check if surname is valid
    if (!validarCognom(cognom)) {
      alert('Cognom no és vàlid');
      return false;
    }
    // check if dni is valid
    if (!validarDNI(dni)) {
      alert('DNI no és vàlid');
      return false;
    }
    // check if email is valid
    if (!validarEmail(correu)) {
      alert('Email no és vàlid');
      return false;
    }
    // check if password is valid
    if (!validarContrasenya(contrassenya)) {
      alert('Contrassenya no és vàlida');
      return false;
    }
    // check if date is valid
    if (!validarDataNaixement(data_naixement)) {
      alert('Has de ser major de edat');
      return false;
    }
    //save the data in the sessionStorage
    sessionStorage.setItem('nom', nom);
    sessionStorage.setItem('cognom', cognom);
    sessionStorage.setItem('correu', correu);
    sessionStorage.setItem('dni', dni);
    sessionStorage.setItem('data_naixement', data_naixement);
    sessionStorage.setItem('genere', genere);
    sessionStorage.setItem('termes_condicions', termes_condicions);
    console.log('Usuari registrat correctament');
    console.log(sessionStorage);
    window.location.href = 'meteo.html';
  });

function validarNom(nom) {
  let nomRegex = /^[a-zA-ZÀ-ÿ\s]{3,40}$/;
  return nomRegex.test(nom);
}

function validarCognom(cognom) {
  let cognomRegex = /^[a-zA-ZÀ-ÿ\s]{3,40}$/;
  return cognomRegex.test(cognom);
}

function validarDNI(dni) {
  let dniRegex = /^[0-9]{8}[A-Z]$/;
  return dniRegex.test(dni);
}

function validarEmail(correu) {
  let correuRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return correuRegex.test(correu);
}

function validarContrasenya(contrassenya) {
  let contrassenyaRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return contrassenyaRegex.test(contrassenya);
}
function validarDataNaixement(data_naixement) {
  let dataNaixement = new Date(data_naixement);

  let avui = new Date();

  let edat = avui.getFullYear() - dataNaixement.getFullYear();

  if (
    avui.getMonth() < dataNaixement.getMonth() ||
    (avui.getMonth() === dataNaixement.getMonth() &&
      avui.getDate() < dataNaixement.getDate())
  ) {
    edat--;
  }

  return edat >= 18;
}

// window.location.href = "meteo.html"; // Redirecting to other page.
