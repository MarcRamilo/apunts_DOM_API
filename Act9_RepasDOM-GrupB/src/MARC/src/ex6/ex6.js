// Ex6 - Esdeveniments de teclat
// Instruccions:
// Crea un fitxer HTML amb una estructura bàsica i afegix els següents elements:

// Una caixa (div) que actuarà com a "escenari" o "escenari de joc".
// Una pilota (div) dins de l'escenari.
// Un botó que l'usuari pot clicar per iniciar la interacció.
// Importa el fitxer JavaScript on es troba la funció moveBall.

// Utilitza la funció moveBall per permetre que la pilota es mogui en resposta a les tecles de fletxa dins de l'escenari. La pilota no ha de sortir dels límits de l'escenari.

// Vincula la funció moveBall a l'esdeveniment clic del botó per iniciar la interacció.

// Ajuda:
// Pots utilitzar els estils CSS per donar una aparença visual a la teva pàgina.
// Assegura't que tot el teu codi estigui contingut dins de la funció moveBall per garantir que es pugui cridar correctament.
// Amb aquest desafiament, podràs posar a prova les teves habilitats en la manipulació del DOM i les interaccions d'usuari mitjançant JavaScript. ¡Diverteix-te resolent aquest desafiament interactiu!



let ball;
let stage;
let isMoving = false;

function moveBall(e) {
  const stageRect = stage.getBoundingClientRect();
  const ballRect = ball.getBoundingClientRect();

  let newLeft = ballRect.left;
  let newTop = ballRect.top;

  switch (e.key) {
    case 'ArrowLeft':
      newLeft = Math.max(stageRect.left, ballRect.left - 5);
      break;
    case 'ArrowRight':
      newLeft = Math.min(stageRect.right - ballRect.width, ballRect.left + 5);
      break;
    case 'ArrowUp':
      newTop = Math.max(stageRect.top, ballRect.top - 5);
      break;
    case 'ArrowDown':
      newTop = Math.min(stageRect.bottom - ballRect.height, ballRect.top + 5);
      break;
  }

  ball.style.left = `${newLeft - stageRect.left}px`;
  ball.style.top = `${newTop - stageRect.top}px`;
}

document.addEventListener('DOMContentLoaded', () => {
  ball = document.getElementById('ball');
  stage = document.getElementById('stage');

  document.getElementById('start').addEventListener('click', () => {
    if (!isMoving) {
      window.addEventListener('keydown', moveBall);
      isMoving = true;
    } else {
      window.removeEventListener('keydown', moveBall);
      isMoving = false;
    }
    //work width mouse
    window.addEventListener('mousemove', (e) => {
      ball.style.left = `${e.clientX}px`;
      ball.style.top = `${e.clientY}px`;
    });

  });
});