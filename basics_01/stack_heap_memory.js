

// stack memory(primitive data type(not changeable))// string, num, boolean, null, undefine, bigint, symbol. 
// heap memory(non-primitive data type(changeable))// functions, objects, arrays.

let myName = "Hira";
let myFirstName = myName;
myFirstName = "Hira khalid";
console.log(myName);
console.log(myFirstName);

let userOne ={
    email:"hirakhaligd@gmail.com",
    id:"user1"
}
let userTwo = userOne;
userTwo.email = "hiratech@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);