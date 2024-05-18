const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// const superHeros = marvel_heros.concat(dc_heros); //***not use push method// concat return new array
// console.log(superHeros);// ***another better and easy way to combine to arrays

//**spread Operator**/
const allHeros = [...marvel_heros, ...dc_heros];// more val combine,...sperate
console.log(allHeros);

// **Rare case array in array**

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [8, 9, [0, 11]]];
const realArr = anotherArr.flat(Infinity)// try not write infinity, write exit  depth 1 or 2...
console.log(realArr);

//mostly use in data scraping

console.log(Array.isArray("hira"));
console.log(Array.from("hira"));//change in array object, string 
console.log(Array.from({name: "Alisher"}));
console.log(Array.from({name: "Alisher"}));

let score1 =100;
let score2 =200;
let score3 =300;

console.log(Array.of(score1, score2, score3));