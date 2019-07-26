'use strict';

// Elementos del HTML
const updateBtn = document.querySelector('.button');
const selectMood = document.querySelector('.select');
const face = document.querySelector('.face');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


//función
function updateMood() {
    /* Recogerá el nuevo estado del select y lo pintará en lugar del actual
    */
    //console.log(selectMood.value);
    face.innerHTML = selectMood.value;


    /*Generará un número aleatorio de 100 como máximo y si es un número par colocará el color de fondo del amarillo correcto (#ffcc00) y si es impar, usaremos el naranja fuego chileno (#ff9900). */
    const randomNum = getRandomInt(100);
    console.log(randomNum);

}


//evento
updateBtn.addEventListener('click', updateMood);

