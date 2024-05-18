//Primitive datatype give you a copy all changes in copy
//immutable, non changeable

//7 types : String, number, boolean, Null, Undefine, BigInt, Symbol

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;
const id = Symbol("123");
const id2 = Symbol("123");
console.log(id === id2);

const bigNumber = 3458990000032111489n

// Reference (Non Primitive)mutable, changeable
//Array, objects, Functions

const heros =["hira", "Shees", "maria"];
let myObj = {
    name: "Hira",
    age: "34"
}

const myFunction = function(){
    console.log("hello world");
}
console.log(typeof myObj);