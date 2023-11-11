function longestWord(words) {
    return words.reduce((longest, current) => (current.length > longest.length ? current : longest), "");
  }
  
  // Example usage:
  const words = ["apple", "banana", "orange", "strawberry"];
  console.log(longestWord(words));