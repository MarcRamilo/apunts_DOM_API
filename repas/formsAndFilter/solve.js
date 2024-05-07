// Validacions.js

// Importa les dades dels productes
const products = require('./data.js');

// Funcions per eliminar i mostrar missatges d'error
function removeExistingError(input) {
  const existingError = input.nextElementSibling;
  if (existingError && existingError.classList.contains("error")) {
    existingError.remove();
  }
}

function displayError(input, message) {
  const error = document.createElement("div");
  error.textContent = message;
  error.classList.add("error");
  input.insertAdjacentElement("afterend", error);
}

// Funcions de validació

function validateName() {
  removeExistingError(nameInput);
  let nomRegex = /^[a-zA-ZÀ-ÿ\s]{3,50}$/;
  if (!nomRegex.test(nameInput.value)) {
    displayError(nameInput, "El nom no és vàlid");
    return false;
  }
  return true;
}

function validateSurname() {
  removeExistingError(cognomInput);
  let cognomRegex = /^[a-zA-ZÀ-ÿ\s]{3,50}$/;
  if (!cognomRegex.test(cognomInput.value)) {
    displayError(cognomInput, "El cognom no és vàlid");
    return false;
  }
  return true;
}

function validateMail() {
  removeExistingError(mailInput);
  let mailRegex = /^[^@]+@[^@]+\.[^@]+$/;
  if (!mailRegex.test(mailInput.value)) {
    displayError(mailInput, "El correu electrònic no és vàlid");
    return false;
  }
  return true;
}

function validarDataNaixement() {
  removeExistingError(edatInput);

  if (!edatInput.value) {
    displayError(edatInput, "El camp és requerit");
    return false;
  }

  let anyNaixement = new Date().getFullYear() - parseInt(edatInput.value);
  if (anyNaixement <= 2007) {
    displayError(edatInput, "Ha de ser major d'edat");
    return false;
  }

  return true;
}

function validateMessage() {
  removeExistingError(meessageInput);
  if (meessageInput.value.length < 10 || meessageInput.value.length > 200) {
    displayError(meessageInput, "El missatge ha de tenir entre 10 i 200 caràcters");
    return false;
  }
  return true;
}

// Afegim validació per gènere i edat

function validateGender() {
  removeExistingError(genderInput);
  if (!genderInput.value) {
    displayError(genderInput, "Cal seleccionar un gènere");
    return false;
  }
  return true;
}

// Afegim una funció per validar el formulari en la seva totalitat

function validateForm() {
  let isValid = true;
  isValid = validateName() && isValid;
  isValid = validateSurname() && isValid;
  isValid = validateMail() && isValid;
  isValid = validarDataNaixement() && isValid;
  isValid = validateGender() && isValid;
  isValid = validateMessage() && isValid;
  return isValid;
}

// Afegim un event listener al formulari per validar-lo abans de l'enviament

document.getElementById('formulariId').addEventListener('submit', function(event) {
  event.preventDefault();

  if (validateForm()) {
    alert("El formulari s'ha enviat correctament!");
    // Aquí pots fer l'enviament real del formulari al servidor si és necessari
  } else {
    alert("Hi ha errors al formulari. Si us plau, revisa els camps marcats.");
  }
});



