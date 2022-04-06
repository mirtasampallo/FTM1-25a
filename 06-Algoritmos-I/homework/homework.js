'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let array = [1]; // rdo lo guardo en un array
  let factor = 2; // defino el factor por el cual empieza a dividir
  while (num !== 1) { // empiezo el ciclo y veo el factor de corte
    if(num % factor === 0) { // comienzo a iterar y si se cumple
    array.push(factor); // agrego el factor al array
    num = num / factor; 
  } else {
    factor++;
  }
  }
  return array;

}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 0; i < array.length -1; i++) {
    if(array[i] >  [i + 1]) {
      let guar = array[i];
      array[i] = array[i + 1];
      array[i + 1] = guard;
    }
  }

}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  var i = 1
  var j = 1
  for (i=0; i < array.length; i++ ) {

  //  for (j = 0;)
  }

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
