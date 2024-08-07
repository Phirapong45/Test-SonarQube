const calculate = require('./complexity');

describe('calculate', () => {
    test('should throw error if input is not a number', () => {
        expect(() => calculate('string')).toThrow("Input must be a number");
        expect(() => calculate(null)).toThrow("Input must be a number");
        expect(() => calculate([])).toThrow("Input must be a number");
    });

    test('should return correct value for input greater than 50', () => {
        expect(calculate(51)).toBe("Greater than 50");
    });

    test('should return correct value for input between 40 and 50', () => {
        expect(calculate(42)).toBe("Greater than 40 and even");
        expect(calculate(41)).toBe("Greater than 40 and odd");
    });

    test('should return correct value for input between 30 and 40', () => {
        expect(calculate(32)).toBe("Between 30 and 40 and even");
        expect(calculate(31)).toBe("Between 30 and 40 and odd");
    });

    test('should return correct value for input between 20 and 30', () => {
        expect(calculate(22)).toBe("Between 20 and 30 and even");
        expect(calculate(21)).toBe("Between 20 and 30 and odd");
    });

    test('should return correct value for input between 10 and 20', () => {
        expect(calculate(18)).toBe("Between 10 and 20 and divisible by 3");
        expect(calculate(17)).toBe("Between 10 and 20 and not divisible by 3");
    });

    test('should return correct value for input between 0 and 10', () => {
        expect(calculate(10)).toBe("Between 0 and 10 and divisible by 5");
        expect(calculate(7)).toBe("Between 0 and 10 and not divisible by 5");
    });

    test('should return correct value for input equal to 0', () => {
        expect(calculate(0)).toBe("Equal to 0");
    });

    test('should return correct value for input less than 0', () => {
        expect(calculate(-2)).toBe("Less than 0 and even");
        expect(calculate(-3)).toBe("Less than 0 and odd");
    });
});
