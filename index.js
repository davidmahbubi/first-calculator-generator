const fs = require('fs');

let data = `
const a = 10;
const b = 20;
const operator = '*';
`

// Addition

for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
        data += `
if(a == ${i} && b == ${j} && operator == '+') {
  console.log('${i} + ${j} = ${i + j}');
}`
    }
}

// Substraction

for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
        data += `
if(a == ${i} && b == ${j} && operator == '-') {
  console.log('${i} - ${j} = ${i - j}');
}`
    }
}

// Multiplication

for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
        data += `
if(a == ${i} && b == ${j} && operator == '*') {
  console.log('${i} * ${j} = ${i * j}');
}`
    }
}

// Division

for (let i = 1; i < 100; i++) {
    for (let j = 1; j < 100; j++) {
        data += `
if(a == ${i} && b == ${j} && operator == '/') {
  console.log('${i} / ${j} = ${i / j}');
}`
    }
}

fs.writeFileSync(`${__dirname}/output/calculator.js`, data ,'utf-8');
console.log('Operation Completed !\nCongrats ~! now you have a calculator ^_^')
