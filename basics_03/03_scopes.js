let a = 10;
const b = 20;
// var c = 30; not use
{
} //scope

if (true) {
  let a = 10;
  const b = 20;
  console.log("inner: ", a);
}

console.log(a);
console.log(b);
console.log(c);
// console ma block scop alg he node code environment ma alag he(interview Q/A)
