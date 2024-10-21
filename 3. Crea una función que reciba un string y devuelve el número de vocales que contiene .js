//Anderson Saul Maravilla Callejas
function contarVocales(str) {
  let vocales = 'aeiouAEIOU';
  let contador = 0;

  for (let char of str) {
    if (vocales.includes(char)) {
      contador++;
    }
  }

  return contador;
}

//Ejemplo
let texto = "Hola, ¿cómo estás?";
let numeroDeVocales = contarVocales(texto);  // Devuelve 7
console.log(numeroDeVocales);

