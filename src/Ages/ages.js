const prompt = require('prompt-sync')();

// Función para validar que la edad esté en el rango de 1 a 120 años
const validateAge = (age) => {
  return age >= 1 && age <= 120;
};

// Función principal
const processAges = () => {
  const ages = [];
  const totalPeople = 10;

  // Recoger las edades de 10 personas
  for (let i = 0; i < totalPeople; i++) {
    let age = parseInt(prompt(`Introduce la edad de la persona ${i + 1}:`));

    // Validar la edad
    while (!validateAge(age)) {
      alert('Edad no válida. Por favor, introduzca un valor entre 1 y 120.');
      age = parseInt(prompt(`Introduce la edad de la persona ${i + 1}:`));
    }

    ages.push(age);
  }

  // Variables para almacenar lo s resultados
  let minors = 0;
  let adults = 0;
  let seniors = 0;
  let totalAge = 0;
  let minAge = 120;
  let maxAge = 1;

  // Procesar las edades
  ages.forEach((age) => {
    if (age < 18) {
      minors++;
    } else if (age >= 18 && age < 60) {
      adults++;
    } else if (age >= 60) {
      seniors++;
    }

    if (age < minAge) {
      minAge = age;
    }

    if (age > maxAge) {
      maxAge = age;
    }

    totalAge += age;
  });

  const averageAge = totalAge / totalPeople;

  // Mostrar los resultados
  console.log(`Total menores: ${minors}`);
  console.log(`Total adultos: ${adults}`);
  console.log(`Total mayores: ${seniors}`);
  console.log(`Menor edad: ${minAge}`);
  console.log(`Mayor edad: ${maxAge}`);
  console.log(`Edad media: ${averageAge.toFixed(2)}`);
};

// Llamar a la función principal
processAges();
