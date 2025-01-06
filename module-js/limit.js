const converters = require('./converter.js');

const freezingPointC = 0;
const boilingPointC = 100;

const freezingPointF = converters.CelciusToFahrenheit(freezingPointC);
const boilingPointF = converters.CelciusToFahrenheit(boilingPointC);

console.log(`The freezing point of water in Fahrenheit is ${freezingPointF}`);
console.log(`The boiling point of water in Fahrenheit is ${boilingPointF}`);

