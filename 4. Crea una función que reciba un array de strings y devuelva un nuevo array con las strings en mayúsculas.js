//Anderson Saul Maravilla Callejas
function stringsEnMayusculas(arr) {
  return arr.map(str => str.toUpperCase());
}

//Ejemplo
let palabras = ["hola", "mundo", "javascript"];
let mayusculas = stringsEnMayusculas(palabras);  // Devuelve ["HOLA", "MUNDO", "JAVASCRIPT"]
console.log(mayusculas);
