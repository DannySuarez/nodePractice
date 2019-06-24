const createDog = require('./index')
// test suite
describe('dog create functon', () => {
it('returns a dog object', () => {
  const dog = createDog('hazy', 5, '20lbs');
  expect(dog).toEqual({
    name: 'hazy',
     age: 5,
    weight: '20lbs'
  })
  })
});