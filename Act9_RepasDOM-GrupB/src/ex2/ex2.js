const img = './img/cirvianum.jpg';
// On posem la imatge? --> Dins el <div>. Anem a seleccionar-ho
const div = document.querySelector('div');
// Necessito generar un element de tipus <img>
const imatge = document.createElement('img');
// Afegeixo els atributs
imatge.src = img;
imatge.alt = 'logo cirviànum';
// I finalment injecto al document HTML
div.appendChild(imatge);
