"use strict";

/* -------------------- 2 - MODUL💰 ---------------- */

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

/* ------------- 21 - Dars "Massivlar"💰 ------------ */

// const arr = [2, 13, 14, 25, 8];

// arr.sort(compareFn);
// console.log(arr);

// function compareFn(a, b) {
//   return a - b;
// }

// arr[99] = 0;
// console.log(arr.length);

// arr.forEach(function (item, index, arr) {
//   console.log(`${index}: ${item} into arr ${arr}`);
// });

// pop
// arr.pop();

// push
// arr.push(7);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }

// const movies = prompt("What is your favourite movies ?", "");
// // oddiy textdan massivga oladi
// const userMovies = movies.split(", ");
// // afavit boyicha tartiblidi
// userMovies.sort();
// // massivdan oddit textga oladi
// console.log(userMovies.join("-"));

/* ------------- 22 - Dars "Clonlash, ES6"💰 ------------ */

// let x = 10;
// let y = x;

// y = y + 5;

// console.log(x);
// console.log(y);

// let isMarried = false;
// let isArray = isMarried;
// isArray = true;
// console.log(isArray);

// const number = {
//   x: 10,
//   y: 5,
// };

// const newNumber = number;

// newNumber.x = 15;

// console.log(number);
// console.log(newNumber);

// function nusxaObj(obj) {
//   let objNusxa = {};

//   for (let key in obj) {
//     objNusxa[key] = obj[key];
//   }
//   return objNusxa;
// }

// const newNumbers = nusxaObj(numbers);

// newNumbers.x = 15;
// newNumbers.z.a = 10;

// console.log(newNumbers);
// console.log(numbers);

// const numbers = {
//   x: 10,
//   y: 5,
// };

// const addNumber = {
//   z: 15,
// };

// const allNumbers = Object.assign(numbers, addNumber);

// console.log(allNumbers);

// arraylarni clone lash
// const arr = [1, 2, 3];
// const numbers = arr.slice();

// numbers[1] = "yusuf";

// console.log(arr);
// console.log(numbers);

// SPREAD

// const liverpool = ["Salah", "Mane"];
// const manCity = ["Mahrez"];

// const mixPlayer = [...liverpool, ...manCity];

// console.log(mixPlayer);

/* ------------- 23 - Dars "Spread operatori"💰 ------------ */

// const calc = [1, 2, 3];

// function logger(x, y, z) {
//   console.log(x + y + z);
// }

// logger(...calc);

// const arr = ["x", "y"];

// const newArr = [...arr];

// Objectda SPREAD operatori

// const numbers = {
//   x: 10,
//   y: 5,
// };

// const newNumbers = { ...numbers };

// newNumbers.x = 15;

// console.log(numbers);
// console.log(newNumbers);

/* ------------- 24 - Dars "OOP asoslari"💰 ------------ */

// const car = {
//   motor: "X",
//   color: "red",
//   isAirbag: true,
//   isSpeed: function () {
//     console.log(320);
//   },
// };

// const gm = {
//   isAirbag: false,
// };

//eski yoli
// gm.__proto__ = car;
// console.log(gm.color);
// gm.isSpeed();

// 1 - yoli
// Object.setPrototypeOf(gm, car);
// console.log(gm);

// 2 - yoli

// const bmw = Object.create(car);

// console.log(bmw);

/* ------------- 25 - Dars "Amaliyot, uyga vazifa. OOP"💰 ------------ */

// const seriesDB = {
//   count: 0,
//   series: {},
//   actors: {},
//   genres: [],
//   private: false,
//   start: function () {
//     seriesDB.count = +prompt("Nechta serial ko'rdingiz?", "");

//     while (
//       seriesDB.count == "" ||
//       seriesDB.count == null ||
//       isNaN(seriesDB.count)
//     ) {
//       seriesDB.count = +prompt("Nechta serial ko'rdingiz?", "");
//     }
//   },
//   rememberMySeries: function () {
//     for (let i = 0; i < 2; i++) {
//       const a = prompt("Oxirgi ko'rgan serialingiz?"),
//         b = prompt("Nechi baxo berasiz?");

//       if (a != null && b != null && a != "" && b != "") {
//         seriesDB.series[a] = b;
//         console.log("done");
//       } else {
//         console.log("error");
//         i--;
//       }
//     }
//   },
//   detectLevelSeries: function () {
//     if (seriesDB.count < 5) {
//       console.log("Kam serial ko’ripsiz");
//     } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
//       console.log("Siz classik tamoshabin ekansiz");
//     } else if (seriesDB.count >= 10) {
//       console.log("Siz serialchi zvezda ekansiz");
//     } else {
//       console.log("Error");
//     }
//   },
//   showDb: function () {
//     if (!seriesDB.private) {
//       console.log(seriesDB);
//     }
//   },
//   visibleDB: function () {
//     if (seriesDB.private) {
//       seriesDB.private = false;
//     } else {
//       seriesDB.private = true;
//     }
//   },
//   writeGenres: function () {
//     // for (let i = 0; i < 3; i++) {
//     // const genre = prompt(`Yaxshi ko'rgan janringiz ${i + 1}`, '')
//     // if (genre === '' || genre === null) {
//     //   console.log("Siz notog'ri ma'lumot kiritdingiz")
//     //   i--
//     // } else {
//     //   seriesDB.genres[i] = genre
//     // }
//     // }

//     let genres = prompt(
//       "Yaxshi ko'rgan janringizni vergul yordamida yozing"
//     ).toLowerCase();

//     if (genres === "" || genres === null) {
//       console.log("Siz notog'ri ma'lumot kiritdingiz");
//       i--;
//     } else {
//       seriesDB.genres = genres.split(", ");
//       seriesDB.genres.sort();
//     }

//     seriesDB.genres.forEach((item, idx) => {
//       console.log(`Yaxshi ko’rgan janringiz ${idx + 1} - nomi ${item}`);
//     });
//   },
// };

/* ------------- 26 - Dars "Dynamic typing"💰 ------------ */

// to string
// 1
// console.log(typeof String(4));

// // 2
// console.log("samar" + 15);

// const youtubeChannel = 10;
// console.log("youtube.com/channel/" + youtubeChannel);

// to number
// 1
// console.log(typeof Number("4"));

// // 2
// console.log(typeof +"5");

// // 3
// console.log(typeof parseInt("15"));

// to boolean

// 0, "", null, undefined, NaN = xar doim false

// 1

// console.log(typeof Boolean("4"));

// // 2

// console.log(typeof !!"4");

/* ------------- 27 - Dars "DOM bilan ishlash"💰 ------------ */

// OLD way
//const box = document.getElementById("box");
//console.log(box);

//const buttons = document.getElementsByTagName("button");
//console.log(buttons);

//const circle = document.getElementsByClassName("circle");
//console.log(circle);

// NEW way
//const heart = document.querySelector(".heart");
//console.log(heart);

//const hearts = document.querySelectorAll(".heart");
//console.log(hearts);

//hearts.forEach((item) => {
//  console.log(item);
//});

/* ------------- 28 - Dars "Metodlar bilan ishlash"💰 ------------ */

// const box = document.querySelector("#box");
// const buttons = document.querySelectorAll("button");
// const circles = document.querySelectorAll(".circle");
// const circle = document.querySelector(".circle");
// const hearts = document.querySelectorAll(".heart");
// const circleWrapper = document.querySelector(".circle__wrapper");

// box
// box.style.backgroundColor = "red";
// box.style.height = "200px";
// box.style.width = "200px";

// buttons
//buttons[0].style.width = "100px";

// circle
// circles[1].style.backgroundColor = "yellow";
// circle.style.background = "yellow";

// heart
// for old
// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = "green";
// }

// forEach new
// hearts.forEach((item) => {
//   item.style.backgroundColor = "gray";
// });

// New element create
// const btn = document.createElement("button");
// document.body.append(btn);

// const myCircle = document.createElement("div");
// myCircle.classList.add("circle");
// circleWrapper.append(myCircle);
// circleWrapper.before(myCircle);
// circleWrapper.after(myCircle);
// circles[0].before(myCircle);
// circles[1].remove();
// circles[1].replaceWith(myCircle);
// circleWrapper.append(myCircle);
// myCircle.innerHTML = "E";
// myCircle.textContent = "E";
// circleWrapper.insertAdjacentHTML("afterbegin", "<pre>E</pre>");

/* ------------- 29 - Dars "Amaliyot, uyga vazifa. DOM"💰 ------------ */

/* ------------- 30 - Dars "Xodisalar bilan ishlash"💰 ------------ */

// const btn = document.querySelector("#btn");
// const overlay = document.querySelector(".overlay");

// click
// btn.addEventListener("click", () => {
//   alert("clcick");
// });

// btn.addEventListener("click", () => {
//   alert("clcick2");
// });

// mouseenter
// btn.addEventListener("mouseenter", (event) => {
// console.log(event.target);
// event.target.remove();
// alert("never");
// });

// let i = 0;

// const deleteElement = (evnt) => {
//   evnt.target.remove();
// };

// btn.addEventListener("click", deleteElement);

// const cb = (e) => {
//   console.log(e.currentTarget);
// };

// btn.addEventListener("click", cb);
// overlay.addEventListener("click", cb);

// const link = document.querySelector("a");

// link.addEventListener("click", (event) => {
//   event.preventDefault();
//   alert("link");
// });

// const btns = document.querySelectorAll("button");

// const logger = () => {
//   console.log(1);
// };

// btns.forEach((item) => {
//   item.addEventListener("click", logger, { once: true });
// });

/* ------------- 31 - Dars "Navigatsiya DOM bo'yicha"💰 ------------ */

// console.log(document.head);
// console.log(document.body);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.querySelector("#btn").parentNode.parentNode);
// console.log(document.querySelector('[data-current="b"]').nextSibling);

// for (let node of document.body.childNodes) {
//   if (node.nodeName === "#text") {
//     continue;
//   }
//   console.log(node);
// }

/* ------------- 33 - Dars "Async, defer. Dynamic scriptlar"💰 ------------ */

// function loadScript(src) {
//   const script = document.createElement("script");
//   script.src = src;
//   script.async = false;
//   document.body.append(script);
// }
// loadScript("second.js");

/* ------------- 34 - Dars "Developer tools. Xatolarni kuzatish"💰 ------------ */

// function sayHello() {
//   console.log("Good morning");
// }
// sayHello();

//   console.log("Good bye");
// }
// sayBye();

// const arr = [1, 34, 14, -56, 98],
//   sorted = arr.sort(compareNum);

// function compareNum(a, b) {
//   return a - b;
// }

// console.log(sorted);

/* -------------------- 3 - MODUL 💰 ---------------- */

/* -------------------- 35  - Dars "Classlist"💰 ---------------- */

// const btns = document.querySelectorAll("button");

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
// btns[0].classList.remove("blue");
// btns[1].classList.add("blue", "some");
// btns[0].classList.toggle("blue");

// btns[0].classList.add("red");

// if (btns[0].classList.contains("red")) {
//   console.log("yeap");
// }

// btns[0].addEventListener("click", () => {
//   if (!btns[1].classList.contains("red")) {
//     btns[1].classList.add("red");
//   } else {
//     btns[1].classList.remove("red");
//   }
// });

// TOGGLE
// btns[0].addEventListener("click", () => {
//   btns[1].classList.toggle("red");
// });

/* -------------------- 36  - Dars "Delegatsiya"💰 ---------------- */

// const wrapper = document.querySelector(".btn-block");
// const btns = document.querySelectorAll("button");

// btns[0].addEventListener("click", () => {
//   btns[1].classList.toggle("red");
// });

// wrapper.addEventListener("click", (event) => {
//   if (event.target && event.target.classList.contains("red")) {
//     console.log("btn click");
//   }
// });

// btns.forEach((item) => {
//   item.addEventListener("click", () => {
//     console.log("clicked");
//   });
// });

// const btn = document.createElement("button");
// btn.classList.add("red");

// wrapper.append(btn);

/* -------------------- 38  - Dars "Animatsiya. setTimeOut & setInterval"💰 ---------------- */
// const btn = document.querySelector("#btn");

// let timerId;
// let i = 0;
// btn.addEventListener("click", () => {
//   // timerId = setTimeout(logger, 1000);
//   timerId = setInterval(logger, 500);
// });

// function logger() {
//   if (i === 3) {
//     clearInterval(timerId);
//   }
//   console.log("set time out");
//   i++;
// }

// let id = setTimeout(function log() {
//   console.log("Hello");
//   id = setTimeout(log, 500);
// }, 500);

// function myAnimation() {
//   const car = document.querySelector(".car");
//   let pos = 0;

//   const timerId = setInterval(frame, 10);

//   function frame() {
//     if (pos === 700) {
//       clearInterval(timerId);
//     } else {
//       pos++;
//       car.style.left = pos + "px";
//     }
//   }
// }

// btn.addEventListener("click", myAnimation);

/* -------------------- 39  - Dars "Loyiha loader"💰 ---------------- */

/* -------------------- 40  - Dars "Date bilan ishlash"💰 ---------------- */

// const now = new Date();

// console.log(now.getDay());

// console.log(now.setHours(18));
// console.log(now);

// let start = new Date();

// for (let i = 0; i < 100000; i++) {
//   let some = i ** 3;
// }

// let end = new Date();

// console.log(start.getTime());
// console.log(end.getTime());

// alert(` Loop competed in ${end - start} millisecond`);

/* -------------------- 43  - Dars "Window, Doc bilan ishlash"💰 ---------------- */

// const box = document.querySelector(".box");
// const btn = document.querySelector("button");

// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

//const height = box.scrollHeight

// btn.addEventListener("click", () => {
// box.style.height = box.scrollHeight + "px";
// console.log(box.scrollTop);
// });

/* -------------------- 43  - Dars "Optimize qilish"💰 ---------------- */

/* -------------------- 44  - Dars "Function constructor"💰 ---------------- */

function Car(name, color, mph) {
  this.name = name;
  this.mph = mph;
  this.color = color;
  this.isAirbag = true;
  this.speed = function () {
    console.log(`Speed of car ${this.name} is ${this.mph}`);
  };
}

Car.prototype.sayHello = function () {
  console.log(`Car name of ${this.name} say hello`);
};

const bmw = new Car("bmw", "red", 140);
const merc = new Car("merc", "black", 200);
console.log(bmw);
console.log(merc);

bmw.sayHello();
merc.sayHello();

console.log(bmw);
console.log(merc);
