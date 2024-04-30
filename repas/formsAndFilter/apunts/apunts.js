// Selecció d'un element per ID
var element = document.getElementById('id_de_l_element');

// Selecció d'elements amb una classe específica
var elements = document.getElementsByClassName('nom_de_la_classe');

// Selecció d'elements amb un selector CSS
var element = document.querySelector('selector_css');

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
