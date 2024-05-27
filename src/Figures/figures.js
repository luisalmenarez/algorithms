const prompt = require('prompt-sync')();

// Functions for calculating perimeters
const perimeterTriangle = (a, b, c) => {
  return a + b + c;
};

const perimeterRectangle = (b, a) => {
  return 2 * (b + a);
};

const perimeterSquare = (a) => {
  return 4 * a;
};

const perimeterCircle = (r) => {
  return 2 * Math.PI * r;
};

//  Functions for calculating areas
const areaTriangle = (b, h) => {
  return (b * h) / 2;
};

const areaRectangle = (b, a) => {
  return b * a;
};

const areaSquare = (a) => {
  return a * a;
};

const areaCircle = (r) => {
  return Math.PI * r * r;
};

// Main function
const calculateFigure = () => {
  const figure = prompt(
    'Seleccione la figura (triángulo, rectángulo, cuadrado, círculo):'
  ).toLowerCase();
  let perimeter = 0;
  let area = 0;

  switch (figure) {
    case 'triangulo':
      const a1 = parseFloat(prompt('Ingrese el lado a:'));
      const b1 = parseFloat(prompt('Ingrese el lado b:'));
      const c1 = parseFloat(prompt('Ingrese el lado c:'));
      const h1 = parseFloat(prompt('Ingrese la altura h:'));
      perimeter = perimeterTriangle(a1, b1, c1);
      area = areaTriangle(b1, h1);
      break;
    case 'rectangulo':
      const b2 = parseFloat(prompt('Ingrese la base b:'));
      const a2 = parseFloat(prompt('Ingrese la altura a:'));
      perimeter = perimeterRectangle(b2, a2);
      area = areaRectangle(b2, a2);
      break;
    case 'cuadrado':
      const a3 = parseFloat(prompt('Ingrese el lado a:'));
      perimeter = perimeterSquare(a3);
      area = areaSquare(a3);
      break;
    case 'circulo':
      const r = parseFloat(prompt('Ingrese el radio r:'));
      perimeter = perimeterCircle(r);
      area = areaCircle(r);
      break;
    default:
      console.log('Figura no reconocida.');
      return;
  }

  console.log(`El perímetro de ${figure} es: ${perimeter}`);
  console.log(`El área del ${figure} es: ${area}`);
};

// Call the main function
calculateFigure();
