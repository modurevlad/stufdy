// let age = 25;
// let year = 2023;
// console.log(age, year);
// age = 30;
// console.log(age);
// const points = 100;
// console.log(points);

// //strings
// console.log('Hello World');
// let email = 'modure_vlad@yahoo.com';
// console.log(email);

// // string concatenation
// let firstname = 'Vlad';
// let lastName = 'Modure';
// let fullName = firstname + ' ' + lastName;
// console.log(fullName);

// // getting characters
// console.log(fullName[2]);

// //string length
// console.log(fullName.length);

// //string methods
// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result, fullName);
// let index = email.indexOf('@');
// console.log(index);

// // common string methods
// result = email.lastIndexOf('d');
// result = email.slice(0,5);
// console.log(result);
// result = email.substr(4,14);
// result = email.replace('m', 'w')
// result = email.replace ('d','l');
// console.log(result);

// let radius = 10;
// const pi = 3.14;

// console.log(radius , pi);

// math operators + , - , * , / , ** , %
// console.log(10/2);
// let result = radius % 3;
// let result = pi * radius**2;
// console.log(result);

// let likes = 10;
// likes = likes + 1;
// likes++;
// likes += 10;
// console.log(likes);

// NaN - Not a Number

// console.log(5 / 'hello');

// concatenate numbers to strings

// let result = 'the blog has ' + likes + ' likes';
// console.log(result);

// template strings

// const title = 'Best reads of 2023';
// const author =  'Vlad';
// const likes = 30;

// concatenation way
// let result = 'The blog called ' + title +' by '+ author + ' has ' + likes +' likes.';
// console.log(result);

// template string way
// let result = `The blog called ${title} by ${author} has ${likes} likes.`;
// console.log(result);

// creating html templates
// let html = `
// <h2>${title}</h2>
// <p>By ${author}</p>
// <span> This blog has ${likes} likes</span>
// `;
// console.log(html);

// let ninjas =['Vlad' , 'Rares' , 'Ale'];
// ninjas[1] = 'Mama';
// console.log(ninjas[1]);

// let ages = [20,25,30,35];
// console.log(ages[2]);

// let random = ['Vlad' , 'Ale' , 30 ,20];
// console.log(random);

// console.log(ninjas.length);

// array methods

// let result = ninjas.join(',');
// let result = ninjas.indexOf('Rares');
// let result = ninjas.concat(['Ken', 'Crystal']);
// let result = ninjas.push('Ken'); //the new length of the array
// result = ninjas.pop();
// console.log(ninjas);
// console.log(result);

// let age = null;
// console.log(age, age+3, `the age is ${age}`);

// booleans & comparisons

// console.log(true , false , 'true' , 'false');

// methods can return booleans
// let email = 'modure_vlad@yahoo.com';
// let names = ['mario' , 'luigi' , 'toad'];

// let result = email.includes('@');
// let result = names.includes('luigi');
// console.log(result);

// comparison operators

// let age = 25;
// console.log(age == 25);
// console.log(age == 30);
// console.log(age != 30 );
// console.log(age > 20);
// let name = 'vlad';
// console.log(name == 'vlad');
// console.log(name > 'Rares');
// console.log(name > 'Vlad');
// console.log(name > 'rares');

// loose comparison (different types can still be equal)

// console.log(age == 25);
// console.log(age == '25');

// strict comparison (different types cannot be equal)

// console.log(age === 25);
// console.log(age === '25');
// console.log(age !== 25);
// console.log(age !== '25');

// type conversion

// let score = '100';

// score = Number(score);
// console.log(score + 1);
// console.log(typeof score);

// let result = Number('hello');
// let result = String(50);
// let result = Boolean(100);
// let result = Boolean('0');

// console.log(result, typeof result);

// FOR LOOPS

// for(let i = 0 ; i < 5 ; i++)
// {
// console.log('in loop:' , i);
// }
// console.log('loop finished');

// const names = ["vlad", "rares", "ale"]; x
// for (let i = 0; i < names.length; i++) {
//   //console.log(names[i]);
//   let html = `<div>${names[i]}</div>`;
//   console.log(html);
// }

// WHILE LOOPS

// const names = ["vlad", "rares", "ale"];
// let i = 0;
// while (i < 5) {
//   console.log("in loop", i);
//   i++;
// }
// let i = 0;
// while (i < names.length) {
//   console.log(names[i]);
//   i++;
// }

// DO WHILE LOOPS

// let i = 0;
// do {
//   console.log("val of i is: ", i);
//   i++;
// } while (i < 5);

// IF STATEMENTS

// const age = 20;
// if (age > 20) {
//   console.log("you are over 20 years old");
// }
// const names = ["vlad", "rares", "ale"];
// if (names.length > 2) {
//   console.log("that's a lot of names");
// }

// const password = "p@ss12";
// if (password.length >= 12 && password.includes("@")) {
//   console.log("that password is mighty strong");
// } else if (password.length >= 8 || (password.includes("@") && password.length >= 5)) {
//   console.log("that password is strong enough");
// } else {
//   console.log("the password isn't strong enough");
// }

// BREAK AND CONTINUE
// const scores = [50, 25, 0, 30, 100, 20, 10];
// for (let i = 0; i < scores.length; i++) {
//   if (scores[i] === 0) {
//     continue;
//   }
//   console.log("your score: ", scores[i]);
//   if (scores[i] === 100) {
//     console.log("congrats, you got thet top score");
//     break;
//   }
// }

// SWTICH STATEMENTS

// const grade = "P";
// switch (grade) {
//   case "A":
//     console.log("you got an A!");
//     break;
//   case "B":
//     console.log("you got an B!");
//     break;
//   case "C":
//     console.log("you got an C!");
//     break;
//   case "D":
//     console.log("you got an D!");
//     break;
//   case "E":
//     console.log("you got an E!");
//     break;
//   default:
//     console.log("not a valid grade!");
// }

// VARIABLES & BLOCK SCOPE

// const age = 30;

// if (true) {
//   const age = 40;
//   const name = "vlad";
//   console.log("inside 1st code block: ", age, name);
//   if (true) {
//     const age = 50;
//     console.log("inside 2nd code block", age);
//   }
// }
// console.log("outside code block: ", age, name);

// FUNCTIONS

// //function declaration

// function greet() {
//   console.log("hello there!");
// }

// //function expression

// const speak = function () {
//   console.log("good day!");
// };
// greet();
// speak();

// //arguments & parameters

// const speak = function (name = "vlad", time = "night") {
//   console.log(`good ${time} ${name}`);
// };

// speak();
// speak("rares");

// //returning values

// const speak = function (name = "vlad", time = "night") {
//   console.log(`good ${time} ${name}`);
// };
// const calcArea = function (radius) {
//   return 3.14 * radius ** 2;
// };
// const area = calcArea(5);
// console.log(area);

// // regular function
// const calcArea = function () {
//   return 3.14 * radius ** 2;
// };

// // arrow function
// const calcArea = (radius) => 3.14 * radius ** 2;

// const area = calcArea(5);
// console.log("area is: ", area);

// // practice arrow functions

// const greet = function () {
//   return " hello world";
// };

// const greet = () => "hello world";
// const result = greet();
// console.log(result);

// //NORMAL FUNCTION
// const bill = function (products, tax) {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };

// ARROW FUNCTION
// const bill = (products, tax) => {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };

// console.log(bill([10, 15, 30], 0.2));

// const name = "vlad";

// //function

// const greet = () => "hello";
// let resultOne = greet();
// console.log(resultOne);

// // methods

// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

// // CALLBACKS & FOREACH

// const myFunc = (callbackFunc) => {
//   let value = 50;
//   callbackFunc(value);
// };

// myFunc((value) => {
//   console.log(value);
// });

// let people = ["vlad", "rares", "ale", "mama", "tata"];

// const logPerson = (person, index) => {
//   console.log(`${index} - hello ${person}`);
// };

// people.forEach(logPerson);

// // get a reference to the "ul"

// const ul = document.querySelector(".people");

// const people = ["vlad", "rares", "ale", "mama", "tata"];

// let html = ``;

// people.forEach((person) => {
//   //create a html template
//   html += `<li style="color: purple">${person}</li>`;
// });
// console.log(html);
// ul.innerHTML = html;

// OBJECTS

// object literals
// const blogs = [
//   { title: "why mac & cheese rules", likes: 30 },
//   { title: " 10 things to make with marmite", likes: 50 },
// ];
// console.log(blogs);
// let user = {
//   name: "vlad",
//   age: 19,
//   email: "modure_vlad@yahoo.com",
//   location: "Cluj-Napoca",
//   blogs: [
//     { title: "why mac & cheese rules", likes: 30 },
//     { title: " 10 things to make with marmite", likes: 50 },
//   ],
//   login() {
//     console.log("the user is logged in");
//   },
//   logout() {
//     console.log("the user is logged out");
//   },
//   logBlogs() {
//     // console.log(this.blogs);
//     console.log("this user has written the following blogs:");
//     this.blogs.forEach((blog) => {
//       console.log(blog.title, blog.likes);
//     });
//   },
// };

// user.login();
// user.logout();
// user.logBlogs();
// console.log(this);
// console.log(user);
// console.log(user.name);

// console.log("location");
// //user.age = 20;
// console.log(user.age);
// console.log(typeof user);

// MATH OBJECTS

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// random numbers

// const random = Math.random();

// console.log(random);
// console.log(Math.round(random * 100));

// primitive values

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);
// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference values

// const userOne = { name: "vlad", age: 19 };
// const userTwo = userOne;

// console.log(userOne, userTwo);

// userOne.name = "rares";
// console.log(userOne, userTwo);

// FINAL CHAPTER

// const para = document.querySelector("div.error");
// console.log(para);

// const paras = document.querySelectorAll("p");
// const errors = document.querySelectorAll(".error");

// console.log(errors);

// // get element by ID

// const title = document.getElementById("page-title");
// console.log(title);

//  // get elements by their class name

// const errors = document.getElementsByClassName("error");
// console.log(errors);
// console.log(errors[0]);

// // get elements by their tag name

// const paras = document.getElementsByTagName("p");
// console.log(paras);
// console.log(paras[1]);

// const para = document.querySelector("p");
// console.log(para.innerText);
// para.innerText = "vlad este tare";

// const paras = document.querySelectorAll("p");
// paras.forEach((para) => {
//   console.log(para.innerText);
//   paras.innerText += " new text";
// });

// const content = document.querySelector(".content");
// console.log(content.innerHTML);
// content.innerHTML += `<h2>this is a new h2 tag</h2>`;

// const people = ["vlad", "rares", "ale"];
// people.forEach((person) => {
//   content.innerHTML += `<p>${person}</p>`;
// });

// const link = document.querySelector("a");
// console.log(link.getAttribute("href"));
// link.setAttribute("href", "https://www.amazon.com");
// link.innerText = "The Amazon website";

// const mssg = document.querySelector("p");
// console.log(mssg.getAttribute("class"));
// mssg.setAttribute("class", "success");
// mssg.setAttribute("style", "color: green");

// const title = document.querySelector("h1");

// title.setAttribute("style", "margin: 50px");

// console.log(title.style);
// console.log(title.style.color);

// title.style.margin = "50px";
// title.style.color = "crimson";
// title.style.fontSize = "60px";
// title.style.margin = "";

// const content = document.querySelector("p");
// console.log(content.classList);
// content.classList.add("error");
// content.classList.remove("error");
// content.classList.add("success");

// CHALLENGE

// const paras = document.querySelectorAll("p");
// paras.forEach((p) => {
//   if (p.textContent.includes("error")) {
//     p.classList.add("error");
//   }
//   if (p.textContent.includes("success")) {
//     p.classList.add("success");
//   }
// });

// const title = document.querySelector(".title");
// title.classList.toggle("test");
// title.classList.toggle("test");
