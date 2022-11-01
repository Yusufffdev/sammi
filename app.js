"use strict";
/* -------------------- 5 - Dars "O'zgaruvchilar"💰 ---------------- */

// // popular version
// let number = 10;
// const borderColor = "red";
// console.log(number);

// number = 20;
// console.log(number);

// const person = {
//   name: "Samar",
// };

// person.name = "Yusuf";

// console.log(person);

// // old version
// console.log(clientName);
// var clientName = "Samar";

/* -------------------- 6 - Dars "Qatiy rejim"💰 ---------------- */

// "use strict";

// const number = 10;
// console.log(number);

/* -------------------- 7 - Dars "Malumot Turlari"💰 ---------------- */

/* JAVASCRIPT DATA TYPES 2 GA BOLINADI : PRIMITIVE VA OBJECT
PRIMITIVE: Boolean; Null; Undefind; Number; String; Symbol:
OBJECT: Array; Object; Function; RegEx; Date: */

// // Number
// let number = 5.6; // Data Type = Number
// console.log(8 / 0); // Infinity
// console.log("yusuf" * 8); // NaN

// // String
// const clientName = "Yusuf";

// // Boolean
// const isMarried = false;
// const isCircleEarth = true;

// // Null
// console.log(clientAge);

// // Undefind
// let umd;
// console.log(umd);

// // Object

// const theif = {
//   // key: value
//   age: 30, //number
//   Jacket: "black", // string
//   isLong: false, // boolean
// };

// console.log(theif.age);

// // Array
// const colors = ["red", "black", "green"];
// console.log(colors[1]);

/* ------------- 8 - Dars "Foydalanuvchi bilan oddiy muloqot"💰 ------------ */

// alert("Hello Java script");

// const place = confirm("Are you here ?");
// console.log(place);

// const currentPlace = prompt("Where are you ?", "Yusuf");
// console.log(typeof currentPlace);

// const age = +prompt("How old are you ?", "15");
// console.log(age + 10);

// const favouriteColor = [];

// favouriteColor[0] = prompt("What is your favourite color #1", "");
// favouriteColor[1] = prompt("What is your favourite color #2", "");
// favouriteColor[2] = prompt("What is your favourite color #3", "");
// console.log(favouriteColor);

/* ------------- 9 - Dars "Interpolatsiya"💰 ------------ */

// const channel = prompt("What is your favaoutite youtuber ?");
// console.log(`https://youtube.com/${channel}`);

// const user = "Samar";
// const job = "JavaScript developer";

// console.log(`User name is ${user}, he is ${job}`);

/* ------------- 10 - Dars "Operatorlar"💰 ------------ */

//console.log(6 + "8");

// incr, decr

// let incr = 10;
// let decr = 10;

// incr++;
// decr--;

// console.log(incr++);
// console.log(decr--);

// console.log(incr++);
// console.log(decr--);

// console.log(incr);
// console.log(decr);

// console.log(++incr);
// console.log(--decr);

// console.log(5 % 2);

//console.log(5 * 5 === "25");

// "&&" = va; "||" = yoki:

// const isAge = true;
// const isClose = false;
// const isChecked = false;

// console.log(isAge && isClose && isChecked);
// console.log(isAge || isClose || isChecked);
// console.log(!isChecked);

//console.log(2 + 2 * 2 != 8);

/* ------------- 10 - Dars "Amaliyot"💰 ------------ */

// const numberOfSeries = +prompt("Nechta serial ko'rdingiz?", "");

// const seriesDB = {
//   count: numberOfSeries,
//   series: {},
//   actors: {},
//   genres: [],
//   private: false,
// };

// const a = prompt("Oxirgi ko'rgan serialingizni kiriting", "");
// const b = prompt("Necha baxo berasiz", "");
// const c = prompt("Oxirgi ko'rgan serialingizni kiriting", "");
// const d = prompt("Necha baxo berasiz", "");

// seriesDB.series[a] = b;
// seriesDB.series[c] = d;

// console.log(seriesDB);

/* ------------- 11 - Dars "Shartli Operatorlar"💰 ------------ */

// const age = +prompt("How old are ypu ?");

// if (age > 18) {
//   console.log("welcome");
// } else {
//   console.log("No entry");
//}

// if (age > 25) {
//   console.log("Horor films");
// } else if (age > 18 && age < 25) {
//   console.log("Boyevik films");
// } else {
//   console.log("Carton");
// }

// ternary operator
//age > 25 ? console.log("Horor films") : console.log("Carton");

// const color = "red";

// switch (color) {
//   case "red":
//     console.log("Stop");
//     break;
//   case "green":
//     console.log("Goo");
//     break;
//   case "yellow":
//     console.log("Slowly");
//     break;
//   default:
//     console.log("Traffic jam");
// }

/* ------------- 14 - Dars "Tiskl"💰 ------------ */

//let startNum = 1;

// FIRST

// while (startNum <= 20) {
//   console.log(startNum);
//   startNum++;
// }

// SECOND

// do {
//   console.log(startNum);
//   startNum++;
// } while (startNum <= 10);

// Third

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//   if (i === 8) {
//     //break;
//     continue;
//   }
//   console.log(i);
// }

/* ------------- 15 - Dars "Tiskl Amaliyot"💰 ------------ */

// const numberOfSeries = +prompt("Nechta serial ko'rdingiz?", "");

// const seriesDB = {
//   count: numberOfSeries,
//   series: {},
//   actors: {},
//   genres: [],
//   private: false,
// };

// 1 - misol;
// for (let i = 0; i < 2; i++) {
//   const a = prompt("Oxirgi korgan serialingiz ?"),
//     b = prompt("Nechi baxo berasiz ?");

//   seriesDB.series[a] = b;

//   if (a != null && b != null && a != "" && b != "") {
//     console.log("done");
//   } else {
//     console.log("error");
//     i--;
//   }
// }

// 3 - misol
// const series = prompt("Nechta serial korgansiz ? ");

// if (series <= 5) {
//   console.log("Kam serial koripsiz");
// } else if (5 < series <= 10) {
//   console.log("Siz classik tomoshabin ekansiz");
// } else {
//   console.log("Siz serialchi zvezda ekansiz");
// }

/* ------------- 16 - Dars "Funksiya"💰 ------------ */

// let names = "yusuf";
// function sayMyName(name, surname) {
//   let names = "yusuf";
//   //let age = 30;
//   console.log(`My name is ${name} ${surname}`);
// }
// sayMyName("Yusuf", "Sunnatullayev");
// //console.log(age);// hich qachon scopkani ichida ochilgan narsani tawqarida iwlatib bomidi

// function calc(a, b) {
//   return a + b;
// }

// const sumOfAandB = calc(10, 5);

// console.log(sumOfAandB);

// FUNCTION
// 1 - FUNCTION DECLARATION
// 2 - FUNCTION EXPRESSION
// 3 - ARROW FUNCTION

// FUNCTION DECLARATION
/* FUNCTION DECLARATION da funksiyadan oldin ham chaqirsa boladi */

// const sumOfAandB = calc(10, 5);
// console.log(sumOfAandB);

// function calc(a, b) {
//   return a + b;
// }

// // FUNCTION EXPRESSION
// /* FUNCTION EXPRESSION da funksiyadan keyin chaqiriladi*/

// const logger = function calc(a, b) {
//   return a + b;
// };

// const sumOfAandB1 = calc(10, 5);
// console.log(sumOfAandB);

// ARROW FUNCTION
/* ARROW FUNCTION ozini shaxsiy context this mavjud emas */

// const calc = (a, b) => {
//   console.log(a + b);
// };

/* ------------- 17 - Dars "Metod vs Xususiyatlar"💰 ------------ */
// String

// const user = "Yusuf";
// const arr = [1, 2, 3, 4];

// length
// console.log(user.length);

// // toUpperCase && toLowerCase
// console.log(user.toLocaleUpperCase());
// console.log(user.toLocaleLowerCase());

// console.log(user);

//const greeting = "Hello World !";

// indexOf
//console.log(greeting.indexOf("W"));

//slice
//console.log(greeting.slice(6, 11));

// substring
//console.log(greeting.substring(6, 11));

// Number

// const num = 8.4;

// // round - yaxlitlash
// console.log(Math.round(num));

// const borderWidth = "13.8px";

// // parseInt - sonni yaxlitlab number holatiga keltiradi
// console.log(parseInt(borderWidth));

// // parseFloat - sonni shundoligicha beradi
// console.log(parseFloat(borderWidth));

/* ------------- 18 - Dars "Amaliyot, uyga vazifa, Funksiya"💰 ------------ */

// let numberOfSeries;

// function startApp() {
//   numberOfSeries = +prompt("Nechta serial ko'rdingiz?", "");

//   while (
//     numberOfSeries == "" ||
//     numberOfSeries == null ||
//     isNaN(numberOfSeries)
//   ) {
//     numberOfSeries = +prompt("Nechta serial ko'rdingiz?", "");
//   }
// }

// startApp();

// const seriesDB = {
//   count: numberOfSeries,
//   series: {},
//   actors: {},
//   genres: [],
//   private: false,
// };

// function rememberMySeries() {
//   for (let i = 0; i < 2; i++) {
//     const a = prompt("Oxirgi ko'rgan serialingiz?"),
//       b = prompt("Nechi baxo berasiz?");

//     if (a != null && b != null && a != "" && b != "") {
//       seriesDB.series[a] = b;
//       console.log("done");
//     } else {
//       console.log("error");
//       i--;
//     }
//   }
// }

// rememberMySeries();

// function detectLevelSeries() {
//   if (seriesDB.count < 5) {
//     console.log("Kam serial ko’ripsiz");
//   } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
//     console.log("Siz classik tamoshabin ekansiz");
//   } else if (seriesDB.count >= 10) {
//     console.log("Siz serialchi zvezda ekansiz");
//   } else {
//     console.log("Error");
//   }
// }

// detectLevelSeries();

// //1
// function showDb(hidden) {
//   if (!hidden) {
//     console.log(seriesDB);
//   }
// }

// showDb(seriesDB.private);

// // 2

// function writeGenres() {
//   for (let i = 0; i < 3; i++) {
//     const genre = prompt(`Yaxshi korgan janringiz ${i + 1}`, "");
//     seriesDB.genres[i] = genre;
//   }
// }

// writeGenres();

/* ------------- 19 - Dars "Callback"💰 ------------ */

// function first() {
//   // code
//   setTimeout(() => {
//     console.log(1);
//   }, 1000);
// }

// function second() {
//   // code
//   console.log(2);
// }

// first();
// second();

// function edu(subject, callback) {
//   console.log(` I wanna teach ${subject}`);
//   callback();
// }

// function done() {
//   console.log("That's great");
// }

// edu("JavaScript", done);

/* ------------- 20 - Dars "Object.Destruptizatsiya"💰 ------------ */

// const theif = {
//   jacket: "black",
//   height: 1.7,
//   colors: {
//     hair: "gray",
//     style: "curley",
//   },
//   howOut: function () {
//     console.log("Fast with help doors");
//   },
// };

// theif.howOut();

// const { hair, style } = theif.colors;

//delete theif.jacket;

//console.log(theif);

// console.log(Object.keys(theif).length);

// let count = 0;

// for (let key in theif) {
//   count++;
//   //   if (typeof theif[key] === "object") {
//   //     for (let i in theif[key]) {
//   //       console.log(`Property ${i} has value ${theif[key][i]}`);
//   //     }
//   //   } else {
//   //     console.log(`Property ${key} has value ${theif[key]}`);
//   //   }
// }

// console.log(count);

// const user = {
//   name: "Yusuf",
//   age: 15,
//   height: 1.75,
//   clors: {
//     hair: "black",
//     eye: "black",
//   },
// };

// const { height, hair } = user.clors;

// console.log(height);
// console.log(hair);

const a = 5;
