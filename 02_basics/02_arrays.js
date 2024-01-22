const arr1 = [1,2,3,4]
const arr2 = ["a","b","c","d"]
// arr1.push(arr2)
// console.log(arr1);   //[ 1, 2, 3, 4, [ 'a', 'b', 'c', 'd' ] ]
// console.log(arr1[4][3]);  //d

// concat do work on new array but push add elements in the same existing array

// const fullArray = arr1.concat(arr2)
// console.log(fullArray);  //[ 1,   2,   3,   4, 'a', 'b', 'c', 'd']

// SPREAD OPERATOR (...)
// kaanch ka glass drop

// const usingSpreadOperator = [...arr1, ...arr2]
// console.log(usingSpreadOperator);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

// to make this array flat
// const readable_array = anotherArray.flat(Infinity) //depth is taken as infinity
// console.log(readable_array);  //[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// ~~~~~~~~~~~~~~ when you select data from a webpage i.e DATA SCRAPING, 
// ~~~~~~~~~~~~~~ it comes in another format like node list, or string or object but we need 
// ~~~~~~~~~~~~~~ array so we do this........

//check if the data is array

// console.log(Array.isArray("Bhumika")); //false

// // to convert it into array

// // string -> array
// console.log(Array.from("Bhumika")); //['B', 'h', 'u','m', 'i', 'k', 'a']

// // object -> array

// console.log(Array.from({name : "Bhumika"})); // [] (object can't be converted to array directly)
// // we have to tell ki keys ka array banana hai ya values ka

// TO CONVERT MULTIPLE VARIABLES TO ARRAY, YOU CAN USE ARRAY.OF 

const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.from(score1,score2,score3));