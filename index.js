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


// se crea función de búsqueda binaria
let iniciar = () => {
    mitad = Math.floor((inicio + fin) / 2);
    start.style.display = "none";
    quest.innerHTML = `¿Tu número es ${mitad}?`;
}

let confirmar = () =>{
    quest.innerHTML = `Tu numero es: ${mitad}, ¡excelente decisión!`;
    esMenor.style.display = "none"
    esMayor.style.display = "none"
    esCorrecto.style.display = "none"
}

let menorQue = () =>{
    fin = mitad - 1;
    iniciar();
}

let mayorQue = () =>{
    inicio = mitad + 1;
    iniciar();
}

let refresh = document.getElementById('reload');
refresh.addEventListener('click', () => {
            location.reload();
})