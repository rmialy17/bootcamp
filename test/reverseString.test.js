const reverseStrings = require('./reverseString')

let string = 'voiture'
let str = 'erutiov'

test('str is reverString of str', () => {
    expect(reverseStrings(string, str)).toBeTruthy()
  })
