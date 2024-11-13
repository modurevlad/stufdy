// // 52
// const article = document.querySelector("article");

// const { appendFile } = require("fs");

// // console.log(article.children);
// // console.log(Array.from(article.children));
// // Array.from(article.children).forEach((child) => {
// //   child.classList.add("article-element");
// // });

// const title = document.querySelector("h2");

// console.log(title.parentElement);
// console.log(title.parentElement.parentElement);
// console.log(title.nextElementSibling);
// console.log(title.previousElementSibling);

// //chaining

// console.log(title.nextElementSibling.parentElement.children);

// // 53
// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//   console.log("you clicked me");
// });

// const items = document.querySelectorAll("li");
// items.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     console.log("item clicked");
//     console.log(e);
//     console.log(e.target);
//            ==
//     console.log(item);
//     e.target.style.textDecoration = "line-through";
//   });
// });

// // 54
// const ul = document.querySelector("ul");
// // ul.remove();
// const items = document.querySelectorAll("li");
// items.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     e.target.remove();
//   });
// });

// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//   //   ul.innerHTML += "<li>something new</li>";
//   //              ==
//   const li = document.createElement("li");
//   li.textContent = "something new to do";
//   ul.prepend(li); // append si prepend
// });

// // 55
// const ul = document.querySelector("ul");
// // ul.remove();

// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//   //   ul.innerHTML += "<li>something new</li>";
//   //              ==
//   const li = document.createElement("li");
//   li.textContent = "something new to do";
//   ul.prepend(li); // append si prepend
// });

// // const items = document.querySelectorAll("li");
// // items.forEach((item) => {
// //   item.addEventListener("click", (e) => {
// //     console.log("event in LI");
// //     e.stopPropagation();
// //     e.target.remove();
// //   });
// // });

// ul.addEventListener("click", (e) => {
//   // console.log("event int UL");
//   if (e.target.tagName === "LI") {
//     e.target.remove();
//   }x
// });

// // 56

// const copy = document.querySelector(".copy-me");

// copy.addEventListener("copy", () => {
//   console.log("am copyright");
// });

// const box = document.querySelector(".box");
// box.addEventListener("mousemove", (e) => {
//   // console.log(e);
//   // console.log(e.offsetX, e.offsetY); //afiseaza pixeli
//   box.textContent = `x pos - ${e.offsetX}   y pos - ${e.offsetY}`;
// });

// document.addEventListener("wheel", (e) => {
//   console.log(e.pageX, e.pageY);
// });

// // // 57
// const button = document.querySelector("button");
// const popup = document.querySelector(".popup-wrapper");
// const close = document.querySelector(".popup-close");

// button.addEventListener("click", () => {
//   popup.style.display = "block";
// });

// close.addEventListener("click", () => {
//   popup.style.display = "none";
// });

// popup.addEventListener("click", () => {
//   popup.style.display = "none";
// });

//59

// const form = document.querySelector(".signup-form");
// // const username = document.querySelector("#username");v1

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   // console.log(username.value);v1
//   // console.log(form.username.value);

//   // 62 VALIDATION
//   const username = form.username.value;
//   const usernamePattern = /^[a-zA-Z]{6,12}$/;
//   const feedback = document.querySelector(".feedback");

//   if (usernamePattern.test(username)) {
//     //feedback good info
//     feedback.textContent = "That username is valid!";
//   } else {
//     //feedback help info
//     feedback.textContent = "Username must contain letters only & be between 6-12 characters long";
//   }
// });

// // 63 live feedback

// form.username.addEventListener("keyup", (e) => {
//   // console.log(e.target.value, form.username.value);
//   console.log(e);
//   const usernamePattern = /^[a-zA-Z]{6,12}$/;

//   if (usernamePattern.test(e.target.value)) {
//     form.username.setAttribute("class", "success");
//   } else {
//     form.username.setAttribute("class", "error");
//   }
// });

//61 testing RegEx
// const username = "vladut";
// const pattern = /^[a-z]{6,}$/;

// let result = pattern.test(username);
// if (result) {
//   console.log("regex test passed :)");
// } else {
//   console.log("regex test fail");
// }

// let result = username.search(pattern);
// console.log(result); //-1 daca nu este ok, altfel positia primului match

// 71

// const scores = [10, 30, 15, 25, 50, 40, 5];

// const filteredScores = scores.filter((score) => {
//   return score > 20;
// });
// console.log(filteredScores);

// const users = [
//   { name: "vlad", premium: true },
//   { name: "ale", premium: false },
//   { name: "rares", premium: false },
//   { name: "mario", premium: true },
// ];
// const premiumUsers = users.filter((user) => {
//   return user.premium;
// });
// console.log(premiumUsers);

//72 map method
// const prices = [20, 10, 30, 25, 15, 40, 80, 5];

// const salePrices = prices.map((price) => price / 2);
// console.log(salePrices);

// const products = [
//   { name: "gold star", price: 20 },
//   { name: "mushroom", price: 40 },
//   { name: "green shells", price: 30 },
//   { name: "banana skin", price: 10 },
//   { name: "red shells ", price: 50 },
// ];

// const filteredProducts = products.map((product) => {
//   if (product.price > 30) {
//     return { name: product.name, price: product.price / 2 };
//   } else {
//     return product;
//   }
// });
// console.log(filteredProducts);

//73 reduce method

// const scores = [10, 20, 60, 40, 70, 90, 30];

// const filteredScores = scores.reduce((contor, curr) => {
//   if (curr > 50) {
//     contor++;
//   }
//   return contor;
// }, 0); //<-- 0 este valoarea lui contor in monentul initial, cand am declarat functia

// console.log(filteredScores);

// const scores = [
//   { player: "mario", score: 50 },
//   { player: "luigi", score: 30 },
//   { player: "mario", score: 70 },
//   { player: "ale", score: 60 },
// ];

// const marioTotal = scores.reduce((contor, curr) => {
//   if (curr.player === "mario") {
//     contor += curr.score;
//   }
//   return contor;
// }, 0);
// console.log(marioTotal);

//74 find method
// const scores = [10, 5, 0, 40, 60, 10, 20, 70];

// const firstHighScore = scores.find((score) => {
//   return score > 50;
// });
// console.log(firstHighScore);

// // 75 sort method

//ex1
// const names = ["vlad", "ale", "rares", "mario"];
// names.sort();
// names.reverse();
// console.log(names);

//ex2
// const scores = [10, 50, 20, 5, 35, 70, 45];
// scores.sort();
// scores.reverse();
// console.log(scores);
// scores.sort((a, b) => {
//   return b - a;
// });
// console.log(scores);

//ex3
// const players = [
//   { name: "mario", score: 20 },
//   { name: "vlad", score: 10 },
//   { name: "ale", score: 50 },
//   { name: "rares", score: 30 },
//   { name: "luigi", score: 70 },
// ];
// players.sort((a, b) => {
//   if (a.score > b.score) {
//     return -1;
//   } else if (b.score > a.score) {
//     return 1;
//   } else {
//     return 0;
//   }
// });
//         // ===

// players.sort((a, b) => {
//   return b.score - a.score;
// });
// console.log(players);

// // 76 chaining array methods

// const products = [
//   { name: "gold star", price: 30 },
//   { name: "mushroom", price: 10 },
//   { name: "green shells", price: 40 },
//   { name: "banana skin", price: 5 },
//   { name: "red shells ", price: 50 },
// ];

// const filteredProducts = products.filter((product) => {
//   return product.price > 20;
// });
// const promos = filteredProducts.map((product) => {
//   return `The ${product.name} is ${product.price / 2} dollars`;
// });
// //             SAU
// const promos = products
//   .filter((product) => {
//     return product.price > 20;
//   })
//   .map((product) => {
//     return `The ${product.name} is ${product.price / 2} dollars`;
//   });
// console.log(promos);

// 82 dates & times

// const now = new Date();
// console.log(now);
// console.log(typeof now);

// // years , months, day, times
// console.log("getFullYear: ", now.getFullYear());
// console.log("getMonth: ", now.getMonth());
// console.log("getDay: ", now.getDay());
// console.log("getDate: ", now.getDate());
// console.log("getHours: ", now.getHours());
// console.log("getMinutes: ", now.getMinutes());
// console.log("getSeconds: ", now.getSeconds());

//83 TIMESTAMPS

// console.log("timestamp: ", now.getTime);

//DATE STRINGS
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());

// const before = new Date("February 22 2024 12:15:48");
// const now = new Date();

// console.log(now.getTime(), before.getTime());
// const diff = now.getTime() - before.getTime();
// console.log(diff);

// const mins = Math.round(diff / 1000 / 60);
// const hours = Math.round(mins / 60);
// const days = Math.round(hours / 24);

// console.log(mins);
// console.log(hours);
// console.log(days);
// console.log(`The blog was written ${days} ago`);

// converting timestamps into date objects

// const timestamp = 1675938474990;
// // console.log(new Date(timestamp));

// 84

// const clock = document.querySelector(".clock");

// const tick = () => {
//   const now = new Date();
//   const hours = now.getHours();
//   const mins = now.getMinutes();
//   const sec = now.getSeconds();

//   const html = `<span>${hours}</span> :
//     <span>${mins}</span> :
//     <span>${sec}</span>`;

//   clock.innerHTML = html;
// };

// setInterval(tick, 1000);

//  85

// const now = new Date();
// // console.log(dateFns.isToday(now));

// //format times & dates
// console.log(dateFns.format(now, "YYYY")); //2024
// console.log(dateFns.format(now, "MMMM")); // April
// console.log(dateFns.format(now, "dddd")); // Tuesday
// console.log(dateFns.format(now, "Do")); // 23rd
// console.log(dateFns.format(now, "dddd Do MMMM YYYY"));

// // comparing dates
// const before = new Date("March 1 2024 12:00:00");
// console.log(dateFns.distanceInWords(now, before, { addSuffix: true }));

//86-87 ASYNC JAVASCRIPT

// console.log(1);
// console.log(2);

// setTimeout(() => {
//   console.log("the callback function fired");
// }, 2000);
// console.log(3);
// console.log(4);

//87-94 HTTP requests

// const getTodos = (resource) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4) {
//         reject("error getting resource");
//       }
//     });

//     request.open("GET", resource);
//     request.send();
//   });
// };

// getTodos("todos/luigi.json")
//   .then((data) => {
//     console.log("promise resolved: ", data);
//   })
//   .catch((err) => {
//     console.log("promise rejected: ", err);
//   });

//// getTodos("todos/luigi.json", (err, data) => {
////   console.log(data);
////   getTodos("todos/mario.json", (err, data) => {
////     console.log(data);
////     getTodos("todos/vlad.json", (err, data) => {
////       console.log(data);
////     });
////   });
//// });

//promise example

// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     //fetch something

//     resolve("some data"); //daca e ok
//     reject("some error"); // daca este eroare
//   });
// };
// // getSomething().then(
// //   (data) => {
// //     console.log(data);
// //   },
// //   (err) => {
// //     console.log(err);
// //   }
// // );

// /////// SAU

// getSomething()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//95 CHAINING PROMISES

// const getTodos = (resource) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4) {
//         reject("error getting resource");
//       }
//     });

//     request.open("GET", resource);
//     request.send();
//   });
// };

// getTodos("todos/luigi.json")
//   .then((data) => {
//     console.log("promise 1 resolved: ", data);
//     return getTodos("todos/mario.json");
//   })
//   .then((data) => {
//     console.log("promise 2 resolved", data);
//     return getTodos("todos/vlad.json");
//   })
//   .then((data) => {
//     console.log("promise 3 resolved", data);
//   })
//   .catch((err) => {
//     console.log("promise rejected: ", err);
//   });

// //  96 FETCH API

// fetch("todos/luigi.json") //returns a promise
//   .then((response) => {
//     console.log("resolved", response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("rejected", err);
//   });

//async and await , fara then

// const getTodos = async () => {
//   const response = await fetch("todos/luigi.json");
//   if (response.status !== 200) {
//     throw new Error("Cannot fetch the data");
//   }

//   const data = await response.json();

//   return data;
// };

// getTodos()
//   .then((data) => console.log("resolved", data))
//   .catch((err) => console.log("rejected", err));

// 111 LOCAL STORAGE

//store data

// localStorage.setItem("name", "mario");
// localStorage.setItem("age", 50);

// get data from local storage

// let name = localStorage.getItem("name");
// let age = localStorage.getItem("age");

// console.log(name, age);

//updating data

// localStorage.setItem("name", "luigi");
// localStorage.age = "40";

// name = localStorage.getItem("name");
// age = localStorage.getItem("age");

// console.log(name, age);

// //deleting data from storage

//localStorage.removeItem("name"); // delete a single item

// localStorage.clear(); // delete all items

// name = localStorage.getItem("name");
// age = localStorage.getItem("age");
// console.log(name, age);

// // make an object/array into a string
// const todos = [
//   { text: "play mariokart", author: "vlad" },
//   { text: "buy milk", author: "mario" },
//   { text: "buy bread", author: "luigi" },
// ];

// // console.log(JSON.stringify(todos));
// localStorage.setItem("todos", JSON.stringify(todos));

// const stored = localStorage.getItem("todos");
// console.log(JSON.parse(stored)); // turn it back into an array/object

// // 115 - OOP
// function User(username, email) {
//   this.username = username;
//   this.email = email;
// }

// User.prototype.login = function () {
//   console.log(`${this.username} has logged in`);
//   return this;
// };

// User.prototype.logout = function () {
//   console.log(`${this.username} has logged out`);
//   return this;
// };

//  ^^ the code behind this :

// class User {
//   constructor(username, email) {
//     //set up properties
//     this.username = username;
//     this.email = email;
//     this.score = 0;
//   }
//   login() {
//     console.log(`${this.username} just logged in`);
//     return this;
//   }
//   logout() {
//     console.log(`${this.username} just logged out`);
//     return this;
//   }
//   incScore() {
//     this.score++;
//     console.log(`${this.username} has a score of ${this.score}`);
//     return this;
//   }
// }
// class Admin extends User {
//   constructor(username, email, title) {
//     super(username, email);
//     this.title = title;
//   }
//   deleteUser(user) {
//     users = users.filter((u) => u.username !== user.username);
//   }
// }
// const userThree = new Admin("vlad", "vlad@yahoo.com", "Black-Belt-Ninja");

// const userOne = new User("mario", "mario@yahoo.com");
// const userTwo = new User("luigi", "luigi@yahoo.com");
// const userThree = new Admin("vlad", "vlad@yahoo.com");

// console.log(userOne, userTwo);
// userOne.login().logout(); // posibil doar daca dau return la this
// userOne.logout();

// let users = [userOne, userTwo, userThree];
// console.log(users);

// userThree.deleteUser(userTwo);
// console.log(users);

// userOne.login().incScore().incScore().logout();

//the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3- it calls the constructor function tu 'build' the object

//124 Prototypal inheritance

// function User(username, email) {
//   this.username = username;
//   this.email = email;
// }

// User.prototype.login = function () {
//   console.log(`${this.username} has logged in`);
//   return this;
// };

// User.prototype.logout = function () {
//   console.log(`${this.username} has logged out`);
//   return this;
// };

// function Admin(username, email, title) {
//   User.call(this, username, email);
//   this.title = title;
// }
// Admin.prototype = Object.create(User.prototype);

// Admin.prototype.deleteUser = function () {
//   //delete a user
// };

// const userOne = new User("mario", "mario@yahoo.com");
// const userTwo = new User("luigi", "luigi@yahoo.com");
// const userThree = new Admin("vlad", "vlad@yahoo.com", "Cel mai tare din parcare");

// console.log(userOne, userTwo, userThree);
// userOne.login().logout();

// 127 DATABASES
