//for of loop
//["", "", ""]
// [{}, {}, {}]

let numArray = [1, 2, 3, 4, 5];
for (const num of numArray) {
  //iterator (i)
  //   console.log(num);
}

//also use in strings
let greetings = "hello world!"; // also use for space break and continue keywords
for (const greet of greetings) {
  //   console.log(`Each char is ${greet}`);
}
// Map like array
let map = new Map();
map.set("UAE", "United Arab Emerit");
map.set("PKR", "Pakistan");
map.set("UK", "United Kindom");
map.set("UK", "United Kindom");//not iterate for in loop
// console.log(map);
for (const [key, value] of map) {
  console.log(key, `:-`, value);
}
//for of loop not iterate Objects

