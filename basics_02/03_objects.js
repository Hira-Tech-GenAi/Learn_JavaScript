//singleton- if we create object with constructor // Object.create

//object literals (way to declared objects)
const mySym = Symbol("key1")
const jsUser = {
    name: "Shafayee",
    "fullName": "Mohammad Shafayee",// not accesable from jsUser."fullName"
    [mySym]: "key1",
    age: 18,
    location: "Karachi",
    email: "shafi_sh@gamil.com",
    isLoggsdIn: false,
    lastLoginDays:["monday", "friday"]
    
}
console.log(jsUser.name);//this is not good way . notation
console.log(jsUser["email"]);//this is good way Use [] notation
console.log(jsUser["fullName"]);//this is good way because
console.log(jsUser[mySym]);

//change key's val
jsUser.name = "M.shees";

// //freez object
// Object.freeze(jsUser);
jsUser.name ="Insho";
console.log(jsUser["name"]);


//use function like local variables
jsUser.greeting = function() {
    console.log("hello world!");
    
}
jsUser.greeting2 = function() {
    console.log(`hello world! ${this.name}`);//same object ko reference krna ho "this " use krte hen
    
}

console.log(jsUser.greeting);//[function return back] because not execute
console.log(jsUser.greeting());//simple function
console.log(jsUser.greeting2());
