// arrays

const myArray = [0,1,2,3,4,5]

// console.log(myArray[1]);

// //arrays methods

// myArray.push(6)
// console.log(myArray);
// myArray.pop()
// console.log(myArray);
// myArray.unshift(5)
// console.log(myArray);
// myArray.shift() //removes elements from the left

//but unshift/shift shifts all the elements to right usse load padhta hai bohot

// const newArr = myArray.join()

// console.log(myArray); //[ 0, 1, 2, 3, 4, 5 ]

// console.log(newArr); // 0,1,2,3,4,5
// console.log(typeof newArr); //string

// **************************************. slice, splice

const myar1 = myArray.slice(1,3)
console.log(myar1);
console.log(myArray);

console.log("now splice will remove the sliced part from the original array");
const myar2 = myArray.splice(1,3)
console.log(myar2);
console.log(myArray);

// [ 1, 2 ]
// [ 0, 1, 2, 3, 4, 5 ]
// now splice will remove the sliced part from the original array
// [ 1, 2, 3 ]
// [ 0, 4, 5 ]

// `````````~~~~~~~~~~~ splice me original array change hojata hai
 