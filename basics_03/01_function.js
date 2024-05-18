// function addTwoNum(num1, num2) {
//    console.log( num1+num2);

// }

function addTwoNum(num1, num2) {
  console.log;
  //    let result = num1+num2;
  //    return result
  return num1 + num2; //also direct return or jb b retrun kren ge tu variable ma save keren ge direct consol nhi krsakte
}
const result = addTwoNum(3, 4);
// console.log("Result: ", result);

function loginUserMessage(username) {
  //default val pass also(username = "sam")
  if (!username) {
    // if (username === undefined) {
    //also write(!username)
    console.log("Please enter a username");
    return; //not execute down code
  }
  return `${username} just logged in`;
}
//for execute call the function
// console.log(loginUserMessage()); // ager ap koi argument pass nhi krte tu Undefined aye ga. check if-else
