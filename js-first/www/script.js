"use strict";
// document.addEventListener("DOMContentLoaded", function () {
function createParagraph() {
  let para = document.createElement("p");
  para.textContent = "You clicked the button!!!";
  document.body.appendChild(para);
}

const buttons = document.querySelectorAll("button");
console.log(buttons.length);
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", createParagraph);
}

const obj = {
  name: "Jonson",
  age: 21,
  gender: "male",
};

console.log(obj);
let secondName = "Knightley";
obj.name = `Kira ${secondName}`;
obj.gender = "female";
console.log(obj.name);
console.log(obj);

const num = 50;
switch (num) {
  case 49:
    console.log("Неверно");
    break;
  case num > 10:
    console.log("Интересное значение");
    break;
  case 50:
    console.log("Верно");
    break;
  default:
    console.log("Ну че то не получилось в этот раз, попробуй др число!");
    break;
}

function factorial(count) {
  let factResult = 1;
  for (let i = 0; i < count; i++) {
    factResult *= i + 1;
    console.log(i);
    console.log(factResult);
  }
  return factResult;
}

if (true && false && setTimeout(() => factorial(15), 4000) && false) {
  console.log("Успех!");
} else {
  console.log("Не сработало!");
}

console.log((5 === 5 && 3 > 1) || 5);

let number = 10;

// for (let i = 0; i < 50; i++) {
//     console.log(`Изначальное число number=${number}`);
//     number += i;
//     console.log(`Число number = ${number}, i=${i}`);
// }
// console.log(number);
let newnumber = 0;
while (number < 50) {
  newnumber += 1234 + 5678;
  number++;
}
console.log(newnumber);

const leghtPiramid = 20;
let star = "*";
let space = "";
let spacer = leghtPiramid / 2;
console.log(spacer);
space = " ".repeat(spacer);

for (let i = 1; i < leghtPiramid; i = i + 2) {
    console.log(space.slice(0, spacer - i + 1) + star.repeat(i));
}

// console.log(space + '*');
// console.log(space.slice(0, spacer - 1) + "***");
