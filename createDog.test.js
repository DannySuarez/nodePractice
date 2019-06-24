const createDog = require('./createDog').default;

describe('dog create function', () => {
  it('returns a dog object', () => {
    const dog = createDog('spot', 10, '15lbs');
    expect(dog).toEqual({
      name: 'spot',
      age: 10,
      weight: '15lbs'
    });
  });
});
