const Calc = require('calc-js').Calc;

console.log(process.argv);
const [,, a, b] = process.argv;

const count = new Calc(parseInt(a)).sum(parseInt(b)).finish();
console.log(count);

// ================

const path = require("path");

console.log(path.resolve('index.js'));

// ================

const fs = require('fs');

fs.readFile('./data.txt', 'utf-8', (err, data) => {
    if(err) {
        console.error(err);
    }
    console.log(data);
});