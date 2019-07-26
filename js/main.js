'use strict';

// Elementos del HTML
const updateBtn = document.querySelector('.button');
const selectMood = document.querySelector('.select');

//función
function updateMood() {
    /* Recogerá el nuevo estado del select y lo pintará en lugar del actual
    */
    console.log(selectMood.value);


    /*Generará un número aleatorio de 100 como máximo y si es un número par colocará el color de fondo del amarillo correcto (#ffcc00) y si es impar, usaremos el naranja fuego chileno (#ff9900). */

}

//evento
updateBtn.addEventListener('click', updateMood);

