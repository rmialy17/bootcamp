const functions = require('./functions')

test('Adds 2 + 2 to equals 4', () => {
    expect(functions.add(2, 2)).toBe(4);
})

//test('Adds 2 + to not equals 4', () => )