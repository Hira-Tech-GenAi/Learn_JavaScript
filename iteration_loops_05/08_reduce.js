const myNum = [1, 2, 3, 4]; //use mostly in shopping card

// const totalNum = myNum.reduce(function(acc, currVal){
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// }, 3)

//write in arrow function
const totalNum = myNum.reduce((acc, currVal) => acc + currVal, 0);

// console.log(totalNum);
const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);
