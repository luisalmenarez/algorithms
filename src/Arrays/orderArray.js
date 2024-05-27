// const prompt = require('prompt-sync')();

// Función para validar que el arreglo esté en orden ascendente
const isAscending = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
};

// Función para leer un arreglo de números enteros ordenados ascendentemente
const readArray = (size) => {
  const arr = [];
  for (let i = 0; i < size; i++) {
    let num = parseInt(prompt(`Ingrese el número ${i + 1} para el arreglo:`));
    arr.push(num);

    // Validar que el arreglo se mantenga en orden ascendente
    while (!isAscending(arr)) {
      alert(
        'El arreglo no está en orden ascendente. Por favor, vuelve a introducir el número'
      );
      arr.pop(); // Remove the last element
      num = parseInt(prompt(`Ingrese el número ${i + 1} para el arreglo:`));
      arr.push(num);
    }
  }
  return arr;
};

// Función para mezclar dos arreglos ordenados
const mergeArrays = (arr1, arr2) => {
  const mergedArray = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  // Agregar los elementos restantes
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
};

// Función principal
const main = () => {
  const size = 5;
  alert(`Ingrese ${size} números del primer array en orden ascendente.`);
  const arr1 = readArray(size);

  alert(`Ingrese ${size} números del segundo array en orden ascendente.`);
  const arr2 = readArray(size);

  const mergedArray = mergeArrays(arr1, arr2);

  console.log(`Array combinado y ordenado: ${mergedArray.join(' ')}`);
};

// Llamar a la función principal
main();
