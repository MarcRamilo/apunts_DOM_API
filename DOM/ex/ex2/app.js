//  Selecciono els elements amb els que vull treballar
button = document.querySelector("button");
body = document.querySelector("body");
h1 = document.querySelector("h1");
// Assigno l'event listener amb el handler corresponent.
button.addEventListener("click", () => {
  body.style.backgroundColor = makeRandColor();
    h1.innerText = body.style.backgroundColor;

});

// Em puc fer una funció addicional per generar un color random
const makeRandColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const a = Math.random().toFixed(2);
  return `rgb(${r}, ${g}, ${b} , ${a})`;
};
