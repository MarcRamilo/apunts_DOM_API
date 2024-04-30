//  Selecciono els elements amb els que vull treballar
buttons = document.querySelectorAll("button");
body = document.querySelector("body");
h1 = document.querySelectorAll("h1");
// Cada buto ha de canviar de color quan es clickat
// for (let button of buttons) {
//   button.addEventListener("click", function () {
//     button.style.backgroundColor = makeRandColor();
//   });
// }
//Amb this
for (let button of buttons) {
  button.addEventListener("click", colorize);
}
for (let h of h1) {
  h.addEventListener("click", colorize);
}
//Com pot ajudar-me el terme this a simplificar el codi?
function colorize() {
  this.style.backgroundColor = makeRandColor();
  this.style.color = makeRandColor();
}

// Em puc fer una funció addicional per generar un color random
const makeRandColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const a = Math.random().toFixed(2);
  return `rgb(${r}, ${g}, ${b} , ${a})`;
};
