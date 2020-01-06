const lib = require('../lib')

// test('absolute - should return a positive number if input is positive', () => {
//     const result = lib.absolute(1);
//     expect(result).toBe(1);
// })

// test('absolute - should return a positive number if input is negative', () => {
//     const result = lib.absolute(-1);
//     expect(result).toBe(1);
// })

// test('absolute - should return a 0 if input is 0', () => {
//     const result = lib.absolute(0);
//     expect(result).toBe(0);
// })

//group test
//number

describe('absolute', () => {
    it('should return a positive number if input is positive', () => {
        const result = lib.absolute(1);
        expect(result).toBe(1);
    })

    it('should return a positive number if input is negative', () => {
        const result = lib.absolute(-1);
        expect(result).toBe(1);
    })

    it('should return a 0 if input is 0', () => {
        const result = lib.absolute(0);
        expect(result).toBe(0);
    })
});


// strings
describe('greet', () => {
    it('should return a greeting message', () => {
        const result = lib.greet("Sohel");
        expect(result).toMatch(/Sohel/);
        expect(result).toContain("Sohel");
    })
})

//arrays
describe('getCurrencies', () => {
    it('should return a arrays', () => {
        const result = lib.getCurrencies();
        //Too specific
        expect(result[0]).toBe("USD");
        expect(result.length).toBe(3);

        // proper way
        expect(result).toContain('USD')

        //Ideal way
        expect(result).toEqual(expect.arrayContaining(['EUR', 'USD', 'BDT']))
    })
})

//objects
describe('getProduct', () => {
    it('should return a product with id', () => {
        const result = lib.getProduct(1);
        // expect(result).toEqual({ id: 1, price: 10 });
        expect(result).toMatchObject({ id: 1, price: 10 }); //better

    })
})

//exceptions
describe('registerUser', () => {
    it('should throw if username is falsy', () => {
        const args = [null, undefined, NaN, '', 0, false];
        args.forEach(a => {
            expect(() => { lib.registerUser(a) }).toThrow(); // pass callback instead of result
        })
    });

    it('should return a user object if valid username is passed', () => {
        const result = lib.registerUser('Sohel');
        expect(result).toMatchObject({ username: 'Sohel' });
    })
})