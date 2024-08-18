// Sum of Two Numbers
function sum(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } 
  else {
    console.log("Los datos de entrada no son adecuados");
  }
}

// Factorial of a Number
function factorial(n) {
  if (typeof n !== 'number') {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Find the Largest Number
function findLargest(arr) {
  if (Array.isArray(arr) && arr.length > 0 && arr.every(num => typeof num === 'number')) {
      const maxNumber = Math.max(...arr);
      return maxNumber;  // Asegúrate de retornar el valor.
  } else {
      console.log("Los datos de entrada no son adecuados");
      return null;  // Devuelve null si la entrada no es adecuada.
  }
}

// Count Vowels in a String
function countVowels(str) {
  if (typeof str !== 'string') {
    console.log("Los datos de entrada no son adecuados");
    return
  }
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// Check if a Number is Prime
function isPrime(n) {
  if (typeof n !== 'number' || !Number.isInteger(n)) {
    console.log("Los datos de entrada no son adecuados");
    return "Los datos de entrada no son adecuados"; // Devolver un mensaje de error
  }

  if (n <= 1) {
    console.log("false");
    return false; // Cambiado a booleano
  } else if (n === 2 || n === 3) {
    console.log("true");
    return true; // Cambiado a booleano
  } else if (n % 2 === 0 || n % 3 === 0) {
    console.log("false");
    return false; // Cambiado a booleano
  } else {
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) {
        console.log("false");
        return false; // Cambiado a booleano
      }
    }
    console.log("true");
    return true;
  }
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
