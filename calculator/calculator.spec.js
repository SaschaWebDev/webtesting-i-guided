const { add } = require('./calculator.js');

describe('calculator.js', () => {
  describe('add() method', () => {
    // add two numbers
    // it('should add two numbers', () => {
    //   // arrange - setup

    //   // act - execute the code under test
    //   const actual = add(2, 2);

    //   // assert - check the result
    //   expect(actual).toBe(4);
    // });

    // test the happy path
    it('should add two numbers', () => {
      expect(add(2, 2)).toBe(4);
      expect(add(0, 2)).toBe(2);
      expect(add(1, -2)).toBe(-1);
    });

    it('should return null if called without arguments', function() {
      expect(add()).toBeNull();
    });

    it('returns null if called of non numeric args', () => {
      expect(add(null, 1)).toBeNull();
      expect(add(NaN, 1)).toBeNull();
      expect(add(undefined, 1)).toBeNull();
      expect(add('1', 1)).toBeNull();
      expect(add(false, 1)).toBeNull();
      expect(add({ foo: 'bar' }, 1)).toBeNull();
      expect(add(1, NaN)).toBeNull();
      expect(add(3, null)).toBeNull();
      expect(add(4, undefined)).toBeNull();
      expect(add(2, '1')).toBeNull();
      expect(add(3, false)).toBeNull();
      expect(add(1, { foo: 'bar' })).toBeNull();
    });

    it('should handle any number of arguments separated by comma', () => {
      expect(add(1, 1, 1)).toBe(3);
    });

    it.todo('handle an array of values');
  });
});
