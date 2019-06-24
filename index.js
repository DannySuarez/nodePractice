function createDog(name, age, weight) {
  return {
    name,
    age,
    weight
  };
}
const dog = createDog('hazy', 5, '20lbs');
console.log(dog);