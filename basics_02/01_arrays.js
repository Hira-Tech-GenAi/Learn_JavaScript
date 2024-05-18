//arrays
// const myArr:number[] = [0, 1, 2, 3, 4, 5];
const myHero = ["Superman", "Batman", "Thor", "Hulk"];
const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);

// // ***arrays methods***
// myArr.push(7);
// console.log(myArr);
// myArr.pop();//not parameter alow
// console.log(myArr);

// myArr.unshift(9);
// console.log(myArr);
// myArr.shift();//not para meter allow
// console.log(myArr);

//***?Que methods answer will be in booleans***
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9)); //if val not exist answer will be -1
// console.log(myArr.indexOf(3)); //if val not exist answer will be -1

// const newArray = myArr.join(); //string and comma
// console.log(myArr);
// console.log(newArray);

// Slice, Splice
const myArr = [0, 1, 2, 3, 4, 5];
console.log("A", myArr);
const myN1 = myArr.slice(1, 3); //A [ 0, 1, 2, 3, 4, 5 ],[ 1, 2 ]
console.log(myN1);
console.log("B", myArr);
const myN2 = myArr.splice(1, 3);
console.log("C", myArr); //left array C [ 0, 4, 5 ],[ 1, 2, 3 ]
console.log(myN2);
