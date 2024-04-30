// Ex1 - Llista de fruites
// Tens alguns noms de fruites diferents i un element html de llista no ordenada; afegeix un element de llista per a cada una de les fruites a la llista no ordenada amb algun mètode recuriu.

// // HTML
// <ul></ul>
// // JS
// const fruitList = ['poma', 'plàtan', 'tomàquet'];

document.addEventListener('DOMContentLoaded', (event) => {
    const ul = document.querySelector('ul'); // Creem una variable que conté la llista no ordenada
    const fruitList = ['poma', 'plàtan', 'tomàquet']; 
    function addFruit(fruitList, index = 0) { // Creem una funció que afegeixi fruites a la llista no ordenada
        if (index < fruitList.length) { // Si l'index és més petit que la longitud de la llista de fruites
            const li = document.createElement('li'); // Creem un element de llista
            li.textContent = fruitList[index]; // El text de l'element de llista és la fruita de la llista de fruites
            ul.appendChild(li); // Afegim l'element de llista a la llista no ordenada
            addFruit(fruitList, index + 1); // Cridem la funció amb l'index incrementat en 1
            console.log(fruitList[index]); 
        }
    }

    addFruit(fruitList); // Cridem la funció amb la llista de fruites
});

