// Selecció d'un element per ID
var element = document.getElementById('id_de_l_element');

// Selecció d'elements amb una classe específica
var elements = document.getElementsByClassName('nom_de_la_classe');

// Selecció d'elements amb un selector CSS
var element = document.querySelector('selector_css');

//Query selector id o classe o element
var element = document.querySelector('#id_de_l_element');
var element = document.querySelector('.nom_de_la_classe');
var element = document.querySelector('element');


// Modificar el contingut d'un element
element.innerHTML = "Nou contingut";

// Modificar el text d'un element
element.textContent = "Nou text";

// Modificar l'estil d'un element
element.style.color = "red";

// Crear un nou element
var nouElement = document.createElement('div');

// Afegir-lo al DOM com a fill d'un altre element
pareElement.appendChild(nouElement);

// Eliminar un element del DOM
pareElement.removeChild(element_a_eliminar);

// Afegir una classe a un element
element.classList.add('nova_classe');

// Eliminar una classe d'un element
element.classList.remove('classe_a_eliminar');

// Alternar una classe en un element (si existeix, l'elimina; sinó, l'afegeix)
element.classList.toggle('classe_a_alternar');

// Diferents maneres de afegir un event listener a un element
element.addEventListener('click', function() {
  alert('Has fet clic!');
});

element.onclick = function() {
    alert('Has fet clic!');
    }
 //Diferents maneres de fer appendChild
element.appendChild(nouElement); // Afegeix nouElement com a últim fill de element
element.insertBefore(nouElement, element.firstChild); // Afegeix nouElement com a primer fill de element
element.insertBefore(nouElement, element.children[0]); // Afegeix nouElement com a primer fill de element
element.insertBefore(nouElement, null); // Afegeix nouElement com a últim fill de element
element.insertBefore(nouElement, element.lastChild.nextSibling); // Afegeix nouElement com a últim fill de element
element.insertBefore(nouElement, element.lastChild.nextElementSibling); // Afegeix nouElement com a últim fill de element
element.insertBefore(nouElement, element.lastChild.nextSibling); // Afegeix nouElement com a últim fill de element


//Més apunts de DOM en codi
// Crear un element de tipus div
var div = document.createElement('div');

// Afegir-li un text
div.textContent = 'Hola!';

// Afegir-li una classe
div.classList.add('classe1');

// Afegir-li un atribut
div.setAttribute('id', 'element1');

// Afegir-lo al document
document.body.appendChild(div);

// Crear un element de tipus button
var button = document.createElement('button');

// Afegir-li un text
button.textContent = 'Fes clic!';

// Afegir-li un event listener
button.addEventListener('click', function() {
  alert('Has fet clic!');
});

// Afegir-lo al document
document.body.appendChild(button);

// Crear un element de tipus input
var input = document.createElement('input');

// Afegir-li un atribut
input.setAttribute('type', 'text');

// Afegir-lo al document
document.body.appendChild(input);

// Crear un element de tipus ul
var ul = document.createElement('ul');

// Afegir-lo al document
document.body.appendChild(ul);

// Crear un element de tipus li
var li = document.createElement('li');