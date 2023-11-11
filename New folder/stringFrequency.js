function stringFrequency(strings) {
    return strings.reduce((frequency, str) => {
      frequency[str] = (frequency[str] || 0) + 1;
      return frequency;
    }, {});
  }
  
  // Example usage:
  const strings = ["hello", "world", "hello"];
  console.log(stringFrequency(strings));
  