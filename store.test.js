const { getState, updateSate } = require('./store');

describe('store', () => {
  it('can get store', () => {
    const state = getState();
    expect(state).toEqual({
      shirts: 5,
      pants: 10,
      toys: 100,
      shoes: 1,
      apples: 9
    });



  });

  it('can update state', () => {
    updateSate('shirts', 104);
    const state = getState();
    expect(state).toEqual({
      shirts: 109,
      pants: 10,
      toys: 100,
      shoes: 1,
      apples: 9
    });
  });
});
