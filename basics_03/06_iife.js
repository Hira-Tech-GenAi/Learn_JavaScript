//Immediately Invoked function Expressions (IIFE)

// jese hi function likha jaye execute ho jaye
// globle scope se variables or declaration ki pollution ko hatane k liy hm apna scope bana lete hen.//interview
(function chai() {
    //named iife
  console.log(`hello world`);
})(); //; lazmi dene he second iife se pehle//()function definition, () execution hota he

((name) => {//simple iife
  console.log(`hello ${name}`);
})("hira");
