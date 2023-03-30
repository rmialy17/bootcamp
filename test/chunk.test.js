const chunks = require('./chunk')

let arr = [ 'a', 'b', 'c', 'd', 'e', 'f' ]
let len = arr.slice(2, 4)
let arr2 = ['c', 'd']

test('arr2 is part array of arr', () => {
    expect(chunks(arr, len, arr2))
})