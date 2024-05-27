// Clase para representar a una Persona
class Person {
  constructor(
    name,
    id,
    birthdate,
    email,
    cityResidence,
    cityOrigin,
    favoriteSongs
  ) {
    this.name = name;
    this.id = id;
    this.birthdate = birthdate;
    this.email = email;
    this.cityResidence = cityResidence;
    this.cityOrigin = cityOrigin;
    this.favoriteSongs = favoriteSongs;
  }

  // Método para mostrar la información de una persona
  displayInfo() {
    console.log(`Nombre: ${this.name}`);
    console.log(`ID: ${this.id}`);
    console.log(`Cumpleaños: ${this.birthdate}`);
    console.log(`Email: ${this.email}`);
    console.log(`Ciudad de residencia: ${this.cityResidence}`);
    console.log(`Ciudad de origen: ${this.cityOrigin}`);
    console.log(`Canciones Favoritas:`);
    this.favoriteSongs.forEach((song, index) => {
      console.log(`  ${index + 1}. ${song.artist} - ${song.title}`);
    });
  }
}

// Función para agregar una persona
const addPerson = () => {
  const name = prompt('Ingrese su nombre:');
  const id = prompt('Ingrese su ID:');
  const birthdate = prompt('Ingrese la fecha de cumpleaños (YYYY-MM-DD):');
  const email = prompt('Ingrese su email:');
  const cityResidence = prompt('Ingrese la ciudad de residencia:');
  const cityOrigin = prompt('Ingrese la ciudad de origen:');
  const favoriteSongs = [];

  for (let i = 0; i < 3; i++) {
    const artist = prompt(
      `Ingrese el artista de su canción favorita ${i + 1}:`
    );
    const title = prompt(`Ingrese el título de tu canción favorita ${i + 1}:`);
    favoriteSongs.push({ artist, title });
  }

  const person = new Person(
    name,
    id,
    birthdate,
    email,
    cityResidence,
    cityOrigin,
    favoriteSongs
  );
  return person;
};

// Función principal
const main = () => {
  const persons = [];
  const totalPersons = 6;

  while (persons.length < totalPersons) {
    const option = prompt(
      'Elija una opción:\n1. Agregar una persona\n2. Mostrar información de una persona\n3. Salir'
    );

    switch (option) {
      case '1':
        if (persons.length < totalPersons) {
          const person = addPerson();
          persons.push(person);
          alert('Persona añadida correctamente.');
        } else {
          alert('La lista está completa.');
        }
        break;
      case '2':
        const index =
          parseInt(
            prompt(
              'Introduzca la posición (1-6) de la persona que desea visualizar:'
            )
          ) - 1;
        if (index >= 0 && index < persons.length) {
          persons[index].displayInfo();
        } else {
          alert('Posición inválida.');
        }
        break;
      case '3':
        alert('Saliendo del programa.');
        return;
      default:
        alert('Opción no válida. Por favor, elija 1, 2 o 3.');
    }
  }
};

// Llamar a la función principal
main();
