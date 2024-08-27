const SayHello = require('../SayHello');
const TheSum = require('../Sum');

describe('Check some of units', () => 
{
   test('should say hello to user', () => 
    {
     const username = 'USER';
     expect(SayHello(username)).toBe(`Welcome ${username}`);
    });
 
    describe("check the first case & the second", () => 
    {
        it('should return 0 when no arguments are passed', () => 
        {
            expect(TheSum()).toBe(0);
        });
        
        it('should return the number when one argument is passed', () =>
        {
            const num = 10; 
            expect(TheSum(num)).toBe(num);
        });
    });

    describe("The other cases", () => 
    {
        it('should return the sum of two numbers', () => 
        {
            const num1 = 10;
            const num2 = 20;
            const result = num1 + num2;
            expect(TheSum(num1, num2)).toBe(result);
        });
        
        it('should return the sum of three numbers', () => 
        {
            const num1 = 10;
            const num2 = 20;
            const num3 = 30;
            const result = num1 + num2 + num3;
            expect(TheSum(num1, num2, num3)).toBe(result);
        });
        
        it('should return the sum of all numbers', () => 
        {
            expect(TheSum(10, 20, 30, 50, 7, 4, 3, 6)).toBe(130);
        });
    });
});
