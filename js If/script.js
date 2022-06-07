var choice = '';
var day = 31;
var select = document.querySelector('select');
var html = document.querySelector('.output');

select.onchange = function() {
  var choice = select.value;
    switch (choice) {
        case 'Белая':
            update('white', 'black');
            break;
        case 'Черная':
            update('black', 'white');
            break;
        case 'Лиловая':
            update('black', 'purple');
            break;
        case 'Желтая':
            update('black', 'yellow');
            break;
        case 'Психоделическая':
            update('black', 'psychedelic');
            break;
        // ДОБАВЬТЕ ИНСТРУКЦИЮ SWITCH
    }
}

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}
var output = document.querySelector('.output1');
output.innerHTML = '';

var i = 10;
while(i >= 0) {
var para = document.createElement('p');
if (i === 0) {

 para.textContent = 'Пуск!';	

} else if (i === 10) {

 para.textContent = 'Обратный отсчёт 10';

} else {

 para.textContent = i;

}
output.appendChild(para);
i-=1;
}
var people = ['Крис', 'Анна', 'Колин', 'Терри', 'Фил', 'Лола', 'Сём', 'Кай', 'Брюс'];

var admitted = document.querySelector('.admitted');
var refused = document.querySelector('.refused');
admitted.textContent = 'Пригласить: ';
refused.textContent = 'Не приглашать(!): '

var i = 0;
while (i < people.length) {
    if (people[i] == 'Фил' || people[i] == 'Лола') {
         refused.textContent += ' ' + people[i];
    } else {
        admitted.textContent += ' ' + people[i];
    }
    i++;
}

// refused.textContent += ;
// admitted.textContent += ;