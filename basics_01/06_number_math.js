//-------NUMBER------//
const score = 400;
console.log(score);
//****toString ****/
let balance = new Number(400);
console.log(balance.toString().length);
console.log(balance.toFixed(1));

//****toPrecision ****/
const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));

const otherNumber1 = 123.8966
console.log(otherNumber1.toPrecision(3));

const otherNumber2 = 1123.8966
console.log(otherNumber2.toPrecision(3));

//****toLocaleString ****/
 const hundreds = 10000000;
 const hundreds1 = 10000000;
 console.log(hundreds1.toLocaleString("en-IN"));
 console.log(hundreds.toLocaleString());

 //-------MATH------//
 console.log(Math);
 console.log(Math.abs(-8));//this method change negative val in positive
 console.log(Math.round(4.8));//5
 console.log(Math.ceil(4.2));//5 rare use Returns the smallest integer greater than or equal to its numeric argument.
 console.log(Math.floor(4.9));//4 Returns the greatest integer less than or equal to its numeric argument.
 console.log(Math.min(1, 3, 8, 9, 0));
 console.log(Math.max(1, 3, 8, 9, 0));

 //****Mostly we use math labrary in Math.random
console.log(Math.random());//0-1 change val every time to run
console.log(Math.floor(Math.random()*10) + 1);//ovid 0. val
const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max - min + 1) ) + min);
