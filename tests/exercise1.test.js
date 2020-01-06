const exercise1 = require('../exercise1');

describe('fizzBuzz', () => {
    it('should throw exception  if input is not a number', () => {
        expect(() => { exercise1('a') }).toThrow(); // pass callback instead of result
    });

    it('should return FizzBuzz if input is 15', () => {
        const result = exercise1.fizzBuzz(15);
        expect(result).toBe('FizzBuzz');
    });

    it('should return FizzBuzz if input is 3', () => {
        const result = exercise1.fizzBuzz(3);
        expect(result).toBe('Fizz');
    });

    it('should return FizzBuzz if input is 5', () => {
        const result = exercise1.fizzBuzz(5);
        expect(result).toBe('Buzz');
    });

    it('should return 1 if input 1', () => {
        const result = exercise1.fizzBuzz(1);
        expect(result).toBe(1);
    });
})