const createDog = require('./createDog');

describe('dog create function', () => {
  it('returns a dog object', () => {
    const dog = createDog('ruby', 8, '25lbs');
    expect(dog).toEqual({
      name: 'ruby',
      age: 8,
      weight: '25lbs'
    });
  });
});
