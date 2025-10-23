// test/app.test.js

const { add, subtract, multiply, divide } = require('../src/index');

test('adds 10 + 5 to equal 15', () => {
    expect(add(10, 5)).toBe(15);
});

test('subtracts 10 - 5 to equal 5', () => {
    expect(subtract(10, 5)).toBe(5);
});

test('multiplies 10 * 5 to equal 50', () => {
    expect(multiply(10, 5)).toBe(50);
});

test('divides 10 / 5 to equal 2', () => {
    expect(divide(10, 5)).toBe(2);
});

test('divide by zero should throw error', () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
});
