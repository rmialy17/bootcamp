const anagrams = require("./anagram")

let str1='ordinateur'
let str2='treudinaor'
test('str1 is an anagram of str2', () => {
    expect(anagrams(str1, str2)).toBeTruthy()
  })