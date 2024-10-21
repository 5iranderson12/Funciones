//Anderson Saul  Maravilla Callejas
function esPrimo(num) {
  if (num <= 1) return false; // Los números menores o iguales a 1 no son primos
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // Si es divisible por i, no es primo
  }
  return true; // Si no encontró divisores, es primo
}

//Ejemplo
console.log(esPrimo(7));  // Devuelve true
console.log(esPrimo(10)); // Devuelve false
