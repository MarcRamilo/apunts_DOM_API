// Ex4 - Llista d'elements
// Estàs construint una pàgina web que mostra una llista d'elements. L'usuari hauria de poder afegir nous elements a la llista i editar el text dels elements. La teva tasca és utilitzar l'API del DOM per crear els elements necessaris i que a través d'eventListeners es puguin editar els elements ja introduits.

// <div id="list-app">
//   <!-- Aquí es crearà i mostrarà la llista d'elements -->
// </div>
// Has de crear tots els elements addicionals amb l'API del DOM. No pots afegir-los al HTML directament.
// Ha d'haver-hi un input de text i un botó per afegir nous elements a la llista.
// L'element de la llista s'ha de poder editar simplement clicant a sobre d'ell i canviant el seu text.

document.addEventListener('DOMContentLoaded', (event) => {
    const div = document.querySelector('#list-app'); // Creem una variable que conté l'element div
    const ul = document.createElement('ul'); // Creem un element de llista no ordenada
    div.appendChild(ul); // Afegim l'element de llista a l'element div
    const input = document.createElement('input'); // Creem un element d'entrada de text
    input.type = 'text';
    div.appendChild(input);
    const button = document.createElement('button'); // Creem un element de botó
    button.textContent = 'Afegir';
    div.appendChild(button);

    button.addEventListener('click', () => { // Afegim un event listener al botó
        const li = document.createElement('li'); // Creem un element de llista
        li.textContent = input.value;
        ul.appendChild(li);
        input.value = '';
        li.addEventListener('click', () => { // Afegim un event listener a l'element de llista
            const inputEdit = document.createElement('input'); // Creem un element d'entrada de text
            inputEdit.type = 'text'; //
            inputEdit.value = li.textContent; // El valor de l'entrada de text és el text de l'element de llista
            li.textContent = ''; // Deixem l'element de llista en blanc perque hi puguem afegir l'entrada de text
            const button = document.createElement('button'); // Creem un element de botó
            button.textContent = 'Editar'; 
            li.appendChild(button);
            li.appendChild(inputEdit);
            inputEdit.focus(); // Posem el focus a l'entrada de text
            inputEdit.addEventListener('blur', () => { // Afegim el blur que lo que fa és que quan l'element de llista perd el focus, es canvia el text de l'element de llista pel valor de l'entrada de text
                li.textContent = inputEdit.value; // El text de l'element de llista és el valor de l'entrada de text
            });
        });
    });
} );
