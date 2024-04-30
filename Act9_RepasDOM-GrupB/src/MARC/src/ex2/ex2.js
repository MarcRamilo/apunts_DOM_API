// Ex2 - Afegir el logotip
// Descarrega un logotip (potser el de la teva pàgina de MP9) i afegeix-lo (element d'imatge) com a element fill de l'element de div existent.
const imgLogo = './logo_photo_marc.svg';
document.addEventListener('DOMContentLoaded', (event) => {
    const div = document.querySelector('div:nth-of-type(3)');
    const img = document.createElement('img');
    img.width = 150;
    img.height = 150;
    img.src = imgLogo;
    div.appendChild(img);
});