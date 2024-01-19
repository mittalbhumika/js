/*
two types of datatypes:
1) PRIMITIVE: (Call by value means when we copy, we don't get original data, we get the copy)

a) String
b) number
c) bool
d) null
e) undefined
f) symbol - to make any value unique
g) bigInt
*/


const Id = Symbol("hello")
const Id1 = Symbol("hello")
console.log(Id === Id1); //false

const bigNumber = 7367698279765742n //BigInt

/*
2) NON-PRIMITIVE OR REFERENCE TYPE (We get reference of them in the memory)

a) Arrays
b) Objects *
c) Functions


JavaScript is a dynamically typed language, which means that data types of variables are determined
by the value they hold at runtime and can change throughout the program as we assign different values to them.

*/

//array
const heroes = ["batman" , "superman", "spiderman"];

//object

let myObject = {
    name : "bhumika",
    age : 22
}

//function

//1) variable type declaration
const myFunction = function(){
    console.log("Hello World");
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (copy) (Primitive), Heap (non - primitive)

let myName = "sakshi" //string(primitive)
let myRealName = myName
myRealName = "Bhumika"
console.log(myRealName);  //bhumika
console.log(myName);  //sakshi

// object //reference(heap) original val

let user1 = {
    name : "bhumika",
    email : "123@gmail.com"
}
let user2 = user1;
user2.email = "345@gmail.com"
console.log(user1.email); //345@gmail.com
console.log(user2.email); //345@gmail.com