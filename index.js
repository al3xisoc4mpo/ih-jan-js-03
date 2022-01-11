// ARREGLOS
// TIPOS DE DATOS NO PRIMITIVOS

const nombres = [
    "mike",
    "sam",
    15,
    null,
    true
]

console.log(nombres);

//                  0       1      2       3
const teachers = ["Mike", "Sam", "Victor", "Ponz"]

console.log(teachers[0]);
console.log(teachers[1]);
console.log(teachers[99]);

//MANIPULACION
//A1. AGREGAR ELEMENTOS AL INICIO

teachers.unshift("Primer Teacher");
console.log("teachers despues de unshift:", teachers);

//A2. AGREGAR ELEMENTOS AL FINAL

teachers.push("Dylan");
console.log("teachers despues del push:", teachers);

// B. ELIMINAR ELEMENTOS
// splice
// 2 argumentos (0, cuantos a borrar hacia delante)

teachers.splice(0, 1);
console.log("teachers despues del splice:", teachers);

// ELIMINAR EL PRIMER ELEMENTO

teachers.shift();
console.log("teachers despues del shift:", teachers);

// ELIMINAR EL ULTIMO ELEMENTO

teachers.pop();
console.log("teachers despues del pop:", teachers);

// CICLOS
// FOR

const paises = ["Mexico", "Colombia", "Peru"];
console.log(paises.length);

for (i = 0; i < paises.length; i++) {
    console.log(`Pais: ${i}`);
    console.log(`Nombre del pais: ${paises[i]}`);
}

// FOR EACH
// CICLO QUE SE UTILIZA COMUNMENTE DENTRO DE LOS ARREGLOS.

paises.forEach(function (element) {
    console.log(element);
}
)
// SPLIT

const frase = "Este es una frase larga";

const palabras = frase.split(" ");
const palabras2 = frase.split("f");

console.log(palabras);
console.log(palabras2);






