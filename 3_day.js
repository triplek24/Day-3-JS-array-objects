// using For loop
//using the Array
var numbers = [ 10, 20, 30, 40, 50] 
for (var i=0; i < numbers.length; i++) {
   console.log(numbers[i])        
} 
//using object property                               //output: 10, 20, 30, 40, 50
var person = {
    fname: "Nick",
    lname: "Jonas",
    age: 26
 }; 
 for (let x in person) {              //For_In_Loop
    console.log(x + ": "+ person[x])
 }                                                    //output: fname nick lname Jonas age 26

 //using FOR_Of loop
 const i = 'boo';

for (const value of i) {
  console.log(value);
} 
//output
// "b"
// "o"
// "o"

const array1 = ['a', 'b', 'c'];
//using FOREACH loop
array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
