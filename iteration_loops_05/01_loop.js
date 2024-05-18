//for
for (let i = 0; i <= 10; i++) {
  //ctrl D //,<= take 10 val print ho
  const element = i;

  if (element == 5) {
    // console.log("'5' is the best number" );
  }
  // console.log(element);
}
// console.log(element);

// for (let i = 0; i <= 10; i++) {
//   console.log(`outer loop value: ${i}`);
//   for (let j = 0; j <= 10; j++) {
//     //console.log(`inner loop value: ${j}`);
//   }
// }
//**for table print***//
for (let i = 1; i <= 10; i++) {
  // console.log(`outer loop value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(i + '*' +j + " = " + i*j);
    // console.log(`${i} * ${+j} = ${+i * j}`);
  }
}
let myArray = ["flash", "batman", "superman"];
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  // console.log(element);
}

// break and continue

// for (let i = 1; i <= 20; i++) {
//   if (i === 5) {
//     console.log(`Detected 5`);
//     break;
//   }
//   console.log(`Value of i is ${i}`);
// }

for (let i = 1; i <= 20; i++) {
  if (i === 5) {
    console.log(`Detected 5`);
    continue;// aik bar maaf krdo
  }
  console.log(`Value of i is ${i}`);
}
