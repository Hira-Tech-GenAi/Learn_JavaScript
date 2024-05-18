const coding = ["javascript", "c++", "python", "Ruby", "php"];

// coding.forEach(function (val) {
//   //callback function has not a name q k ye function array k andr chal raha he ye khud parameter laye ga
//   console.log(val);
// });
// second method

coding.forEach((item) => {
  // console.log(item);
});

// function printMe (item){
// console.log(item);
// }
// coding.forEach(printMe)// function ka just reference dena he execute ni krna he

coding.forEach((index, item, array) => {
  // console.log(index, item, array);
});

const myCoding = [//more use in data base
  {
    languageName: "python",
    languageFileExtention: "py",
  },
  {
    languageName: "javascript",
    languageFileExtention: "js",
  },
  {
    languageName: "Typescript",
    languageFileExtention: "ts",
  },
];
myCoding.forEach((item)=>{
    console.log(item.languageFileExtention);

})