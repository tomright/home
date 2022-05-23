// var button = document.querySelector(".pressButton");
// var name = 'trolllolo';

// function sendName() {
// let name = prompt("Как тебя зовут?");
// if (name === null || name.length === 0) {
// alert("You motherfucker!");
// } else {
// alert("Hi " + name + ", fuck you!");
// console.log(name);
// }
// }
// button.addEventListener("click", sendName);
var stringMass =
  "После разделения строки на несколько подстрок метод split () помещает их в массив и возвращает его. Он не вносит никаких изменений в исходную строку.";
var arrayStringMass = stringMass.split(" ");
var indexOfArray = new Array();
let findLetter = "ос";
let counter = 0;
console.log(arrayStringMass);
console.log(arrayStringMass.length);
for (let i = 0; arrayStringMass.length > i; i++) {
  if (arrayStringMass[i].indexOf(findLetter) >= 0) {
    indexOfArray.push(
      new Array(arrayStringMass[i], arrayStringMass[i].indexOf(findLetter))
    );
    if (
      arrayStringMass[i][
        arrayStringMass[i].indexOf(findLetter) - 1
      ].toUpperCase() ==
      arrayStringMass[i][arrayStringMass[i].indexOf(findLetter) - 1]
    ) {
      arrayStringMass[i] = arrayStringMass[i].toLowerCase();
      arrayStringMass[i] = arrayStringMass[i].replace(
        findLetter,
        findLetter.toLocaleUpperCase()
      );
    } else {
      arrayStringMass[i] = arrayStringMass[i].replace(
        findLetter,
        findLetter.toLocaleUpperCase()
      );
    }
    counter++;
  }
  console.log(
    arrayStringMass[i] + "    " + arrayStringMass[i].indexOf(findLetter)
  );
  console.log(typeof arrayStringMass[i].indexOf(findLetter));
}
console.log(indexOfArray);
console.log(counter);
console.log(arrayStringMass);

// let indexToPut = arrayStringMass[0].indexOf('ос');
// console.log(arrayStringMass[0]);
// console.log('Index to cut ' + indexToPut);
// console.log(arrayStringMass[0][arrayStringMass[0].indexOf('ос')]);
