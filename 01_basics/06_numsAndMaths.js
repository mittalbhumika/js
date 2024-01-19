// const balance = new Number(100);
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //100.00

// const newNumber = 35435.66698;
// console.log(newNumber.toPrecision(3)); //3.54e+4

// const hundreds = 1000000000000; //unable to count the zeroes

// console.log(hundreds.toLocaleString()); //1,000,000,000,000
// //for indian version of commas
// console.log(hundreds.toLocaleString('en-IN')); //10,00,00,00,00,000

 
       // ++++++++++++++++++++++++++++++++++. MATHEMATICS.    ++++++++++++++++++++++++++++++++++.

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(55.7));
// console.log(Math.ceil(4.5));
// console.log(Math.floor(4.9));

console.log(Math.random());  //(always a value b/w 0 and 1)

//for a random value b/w 1 and 10
console.log((Math.random() * 10) + 1); 

//trick for min and max defination

const min = 10
const max = 20

//FORMULA = (Math.floor(Math.random() * (max - min + 1)) + min)
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
