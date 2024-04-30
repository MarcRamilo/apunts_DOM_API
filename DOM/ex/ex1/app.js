// Practiquem l'ús de addEventListener. Tens dos botons, cadascun amb un id:
// 'hello' i 'goodbye'. El teu objectiu és afegir un listener de clic a cada
// botó.

// Quan es faci clic al botó hello, hauries de fer console.log "hello"
const btn = document.querySelector('#hello');
btn.addEventListener('click', () => {
  console.log('hello');
});
// Quan es faci clic al botó goodbye, hauries de fer console.log "goodbye"
const btn2 = document.querySelector('#goodbye');
btn2.addEventListener('click', () => {
  console.log('goodbye');
});