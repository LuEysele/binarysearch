// Definiendo variables útiles
const start = document.getElementById("inicio");
const quest = document.getElementById("pregunta");
const esMenor = document.getElementById("menor");
const esMayor = document.getElementById("mayor");
const esCorrecto = document.getElementById("correcto");
let array = [];
for (let i = 0; i <= 100; i++) {
    array.push(i);
}
let inicio = 0;
let fin = array.length - 1;


// se crea función flecha para definir el valor que se encuentra en la mitad del arreglo
let iniciar = () => {
    mitad = Math.floor((inicio + fin) / 2);
    start.style.display = "none";
    esMenor.style.display = "inline";
    esMayor.style.display = "inline";
    esCorrecto.style.display = "inline";
    refresh.style.display = "inline";
    quest.innerHTML = `¿Tu número es ${mitad}?`;
}

// se crea función confirmar para botón
let confirmar = () =>{
    quest.innerHTML = `Tu numero es: ${mitad}, ¡excelente decisión!`;
    esMenor.style.display = "none"
    esMayor.style.display = "none"
    esCorrecto.style.display = "none"
}

// caso en el que el valor que piense el usuario sea menor que el indicado por el algoritmo
let menorQue = () =>{
    fin = mitad - 1;
    iniciar();
}

// caso en el que el valor que piense el usuario sea menor que el indicado por el algoritmo
let mayorQue = () =>{
    inicio = mitad + 1;
    iniciar();
}

// función para recargar el juego
let refresh = document.getElementById('reload');
refresh.addEventListener('click', () => {
            location.reload();
})