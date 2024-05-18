// shopping card, e-commerce app etc user add add, jahan apko maloom na ho kitne argument ane wale hen

function calculateCartPrice(val1, val2, ...num1) {
  //rest operator bundle all them
  return num1;
}
// console.log(calculateCartPrice(200, 400, 500, 300));

const userName = {
  // an object
  username: "hira",
  prices: 199,
};
// how to pass an object in function???

// function handleObject(anyobject) {
//   //pass any object ta k koi b object pass krsaken
//   console.log(
//     `Username is ${anyobject.username} and price is ${anyobject.prices}`
//   );
// }

// handleObject(user);

// how to pass an object in function???

handleObject1({
  username: "ali",
  price: 399,
});
const myNewArray = [100, 900, 1000, 140];

function returnSecondValue(getArray) {
  return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([300, 200, 800, 1100])); //also pass in array
