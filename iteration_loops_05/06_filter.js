// coding = ["javascript", "c++", "python", "Ruby", "php"];
// const val = coding.forEach((item) => {
//   //for each not retrun value
//   // console.log(item);
//   // return items;
// });
// //    console.log(val);

let myNum = [1, 2, 3, 4, 5, , 7, 8, 9, 10];
// let newNum = myNum.filter((num) =>  {// jb b ap scope open krte hen apko retrun keyyword use krna pare ga
//   return num > 4;

// });

// console.log(newNum);

// const newNums = []; //foreach method
// myNum.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// });
// console.log(newNums);

//data base
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];
let UserBooks = books.filter((bookData) => bookData.genre === "History");
// console.log(UserBooks);
UserBooks = books.filter((bookData) => {
  return bookData.publish >= 2000 && genre === "History";
});
console.log(UserBooks);
