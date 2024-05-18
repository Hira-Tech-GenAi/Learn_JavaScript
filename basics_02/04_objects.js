//singleton- if we create object with constructor // Object.create
// const tinderUser = new Objects();
//simple way
const tinderUser = {};
tinderUser.id = "123and";
tinderUser.name = "Hani";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
  email: "hani@gmail.com",
  fullname: {
    userfullname: {
      firstname: "hani",
      lastname: "Ali,",
    },
  },
};
//

//combine OBJECTS
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = Object.assign({}, obj1, obj2); //assign(target: {}, source: any): any // some use this
// console.log(obj3);
//Most use same array concept spread Operator...
// const obj4 = { ...obj1, ...obj2 };
// console.log(obj4);

//for datdbase object in arr

const users = [
  {
    id: 1,
    emain: "ali@gmail.com",
  },
];
// users[1].email;
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty);

//destructure mostly use in arry and object both, in react we received object and destructure them

const course = {
  coursename: "JS in urdu",
  price: "999",
  courseInstructor: "hitesh",
};

// use that values
// course.courseInstructor //not do most
const { courseInstructor:constructor } = course;//:apna nam b de sakte hen
console.log(constructor);