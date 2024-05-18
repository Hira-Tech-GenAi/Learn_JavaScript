function one() {
  const username = "hira";
  function two() {
    const website = "hello";
    console.log(username);
  }
  //   console.log(website);error
  two(); //not execute
}
// one()//child allow to exces parent variables

//Now check this in if else
if (true) {
  const username = "hira";
  if (username === "hira") {
    const website = " link";
    // console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);
// ********************** interesting ********************

function addOne(num) {
  return num + 1;

  addOne(5);
  const addTwoNum = function (num) {//also declared functions in variables
    return num + 2;
  };
}
addTwoNum(5)
