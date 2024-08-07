const minus = require('./code-smells');

test('subtracts 5 - 3 to equal 2', async () => {
    const result = await minus(5, 3);
    expect(result).toBe(2);
});

test('subtracts 10 - 7 to equal 3', async () => {
    const result = await minus(10, 7);
    expect(result).toBe(3);
});

test('subtracts 1 - 1 to equal 0', async () => {
    const result = await minus(1, 1);
    expect(result).toBe(0);
});
