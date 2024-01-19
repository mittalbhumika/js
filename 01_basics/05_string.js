const name = "bhumika"
const repoCount = 50
//console.log(name + repoCount + "value");

//BACKTicks - STRING INTERPOLATION I.E., ${}

// console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);  //Hello my name is bhumika and my repocount is 50

// const stringObjectType = new String("helloBHumika");
// console.log(stringObjectType); //[String: 'helloBHumika']
// console.log(stringObjectType[0]); //h
// console.log(stringObjectType.charAt(4)); //0

// const stringSlicing = stringObjectType.substring(2,6); 
// console.log(stringSlicing); //lloB

// //slice me we can even give -ve index
// const anotherString = stringObjectType.slice(-10,8)
// console.log(anotherString);  //lloBHu

// //trim removes extra whitespaces
// const spacedString = "     bhumi       "
// console.log(spacedString);
// console.log(spacedString.trim());


//replace

const url = "https://humble-eureka-r56qgxgwqx43v69.github.dev/";

console.log(url.replace("eureka", "bhumika")); //https://humble-bhumika-r56qgxgwqx43v69.github.dev/
console.log(url.split("-"));   //[ 'https://humble', 'eureka', 'r56qgxgwqx43v69.github.dev/' ]
