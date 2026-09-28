// 1. Modificar el primer "¡Hola mundo!" para que diga "Adiós"
document.getElementById('rojo').innerHTML = "Adios";


// 2. Cambiar el color de fuente de un encabezado a naranja
// tercer h1 de la página
document.getElementById('tercer').style.color = "orange";

// 3. Añadir un encabezado interactivo que cambie a marrón al hacer clic
const encabezadoClic = document.getElementById('encabezado-interactivo');
encabezadoClic.addEventListener('click', () => {
  encabezadoClic.style.color = 'brown';
});