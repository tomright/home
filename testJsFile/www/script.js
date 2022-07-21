const getFuckOff = function () {
  console.log("Fuck Off!!!");
};
getFuckOff();

const sayHi = (a) => console.log(a);
sayHi("Hi hihiihihihihihihi!");

const calc = (a, b) => {
  return a * b;
};
console.log(calc(2, "Hello"));

const userCurr = 30;
const dicount = 0.5;

function convert(cours, amout) {
  return cours * amout;
}
convert(userCurr, 2);

function promountion(amout, discounter) {
  return amout * discounter;
}
console.log(promountion(convert(userCurr, 3), dicount));

const str = "0123456789";
console.log(str.slice(str.indexOf('5')));

const num = 4.49;
// console.log(Math.round(num));

console.log(parseInt(num));

console.log(parseFloat(num));

function first(string, callback) {
  console.log(string);
  callback();
}
function callback() {
  console.log('Second function');
}
first('First function', callback);