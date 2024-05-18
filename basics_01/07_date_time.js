//date
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());
console.log(typeof myDate);//object
//specific date
let myCreatedDate = new Date(2024, 3, 20)
console.log(myCreatedDate.toDateString());
// let myCreatedDate1 = new Date(2024, 3, 20, 5, 3)
// console.log(myCreatedDate1.toLocaleString());
let myCreatedDate2 = new Date("2025-02-18");//yy/mm/dd
console.log(myCreatedDate2.toLocaleString());
let myCreatedDate3 = new Date("03-13-2024")//mm/dd/yy
console.log(myCreatedDate3.toLocaleString());

//Time
let myTimeStamp = Date.now(); //use design polls quiz who answer first
// console.log(myTimeStamp);
// console.log(myCreatedDate3.getTime());//milliseconds
console.log(Math.floor(Date.now()/1000));//milliseconds change seconds//floor/round


//just know month or date or in dates use some methods

let newDate = new Date()
    console.log(newDate);
    console.log(newDate.getDate());
    console.log(newDate.getDay());
    console.log(newDate.getMonth()+1);
    console.log(newDate.getFullYear());
    console.log(newDate.getTimezoneOffset());
//  `${newDate.getDay()} and the time`

//use most define objects and parameters in toLocaleString
newDate.toLocaleString("default", {
    weekday:"long",
    timeZone:"google search"
})


