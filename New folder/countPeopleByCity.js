function countPeopleByCity(people) {
    return people.reduce((countByCity, person) => {
      countByCity[person.city] = (countByCity[person.city] || 0) + 1;
      return countByCity;
    }, {});
  }
  
  // Example usage:
  const people = [
    { name: "Alice", age: 30, city: "New York" },
    { name: "Bob", age: 40, city: "Chicago" },
    { name: "Charlie", age: 50, city: "New York" }
  ];
  console.log(countPeopleByCity(people));