function createDog(name, age, weight) {
  age = parseInt(age);
  return {
    name,
    age,
    weight
  };
}
module.exports = createDog;
