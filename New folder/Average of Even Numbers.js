function averageOfEvenNumbers(numbers) {
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  
  if (evenNumbers.length === 0) {
    return 0;
  }

  const sum = evenNumbers.reduce((acc, num) => acc + num, 0);
  return sum / evenNumbers.length;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6];
console.log(averageOfEvenNumbers(numbers));