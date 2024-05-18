
//concatenation
let firstName = "hira";
let repoCount = 50;
// console.log(firstName + repoCount + "value"); // not recommended

//****string interpolation *****//

console.log(
  `Hello my is ${firstName.toUpperCase("hira")} and my repo count is ${50}`
);
//better way use, method also

//another way to write string//
const gameName = new String("Alisher-aiza-beenish");

console.log(gameName[0]);
// console.log(gameName._proto_);
// // console.log(gameNam.length);
// // console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("e"));

const newString = gameName.substring(0, 4);//end num not include
console.log(newString);
// const anotherString = gameName.slice(1, 4);
// console.log(anotherString);
 anotherString = gameName.slice(-5, 4);//in slice method also give negative value
console.log(anotherString);

const url = "http://hitesh.com/hitesh%20choudhary";
console.log(url.replace("%20", "_"));
console.log(url.includes("hitesh"))//give boolean result

console.log(gameName.split("-"));//[ 'Alisher', 'aiza', 'beenish' ]
// console.log(gameName.split(""));[ 'Alisher-aiza-beenish' ]
/*console.log(gameName.split(" "));[
  'A', 'l', 'i', 's', 'h',
  'e', 'r', '-', 'a', 'i',
  'z', 'a', '-', 'b', 'e',
  'e', 'n', 'i', 's', 'h'
]*/
