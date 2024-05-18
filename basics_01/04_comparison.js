// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);
console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// the reason is that an equality check == and comparisons ><>=<= work differently.
//comparison convert null to a number, treating it as 0.
//that's why last console null>=0 is true and first console null>0 is false.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined >= 0);// don't do these type comparison//clean code