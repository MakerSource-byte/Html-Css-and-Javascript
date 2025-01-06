const cipher = require('./cipher.js')

const word = "Hello world! I love JavaScript";
const val = 7;

console.log(`Original Text: ${word}`);
console.log(`Ciphered Text: ${cipher.cipherString(word, val)}`);