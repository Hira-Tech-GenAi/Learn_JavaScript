//this means current contax/values object to access this ki value not enviroment ma {} ati he.
const user = {
  username: "hira",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome! to the portal`);
    console.log(this);
  },
};
// user.welcomeMessage();
// user.username = "jabeen";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//   let username = "shees";
//   console.log(this.username);
// }
// chai();

// const chai = function () {// same above ans Undefine
//   let username = "shees";
//   console.log(this.username);
// }
// chai();
// const chai = () =>{// same above ans Undefine
//   let username = "shees";
//   console.log(this.username);
// }
// chai();

// ******* Arrow function
// () => {} basic syntax
// const addTwo = (num1, num2) => {//simple
//   return num1 + num2;//return expilicetri lagana pare
// };
// console.log(addTwo(3, 4));
// const addTwo = (num1, num2) =>num1 + num2; //implisent  return (ma man leta hon one line code) not use{}
// const addTwo = (num1, num2) =>(num1 + num2); //() lagate hen tu apko return keyword use nhi krna parta
const addTwo = (num1, num2) =>({username:"hira"}); //() return object
;
console.log(addTwo(3, 4));
