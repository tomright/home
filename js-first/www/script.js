// document.addEventListener("DOMContentLoaded", function () {
    function createParagraph() {
        let para = document.createElement('p');
        para.textContent = 'You clicked the button!!!';
        document.body.appendChild(para);
    }


    const buttons = document.querySelectorAll('button');
console.log(buttons.length);
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', createParagraph);
    }
    
const obj = {
    name: 'Jonson',
    age: 21,
    gender: 'male'
};

console.log(obj);
let secondName = 'Knightley'
obj.name = `Kira ${secondName}`;
obj.gender = 'female';
console.log(obj.name);
console.log(obj);

// });

