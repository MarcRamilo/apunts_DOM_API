// Ex3 - Canvia el primer i l'últim element d'una llista no ordenada
// Canvia el text del primer i l'últim element de cada element de llista no ordenada en aquesta pàgina de manera que passin a ser el text primer i últim. Fes servir pseudoselectors i algun mètode recursiu.

// <ul>
//   <li>1</li>
//   <li>2</li>
//   <li>3</li>
// </ul>
// <ul>
//   <li>a</li>
//   <li>b</li>
//   <li>c</li>
// </ul>
// <ul>
//   <li>👻</li>
//   <li>👽</li>
//   <li>🦁</li>
// </ul>

document.addEventListener('DOMContentLoaded', (event) => {
    const uls = document.querySelectorAll('ul');
    uls.forEach(ul => {
        const firstLi = ul.querySelector('li:first-child');
        const lastLi = ul.querySelector('li:last-child');
        firstLi.textContent = 'primer';
        lastLi.textContent = 'últim';

    });
});
