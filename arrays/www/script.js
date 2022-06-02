// var randomWord =
//   "Потребность в SSL-сертификатах возникла у меня в связи с тем, что срок старых истёк, а создать новые оказалось невозможным из-за возникших ограничений на доменные зоны RU и РФ. Если у вас такая же проблема или вам просто надоело искать веб-сервис для выпуска SSL-сертификатов, то эта заметка вам поможет.";
// var randomWordArray = randomWord.split(" ");
// var cleanRandowmWordArray = [];
// for (var i = 0; randomWordArray.length > i; i++) {
//   tempWord = randomWordArray[i].replace(",", "");
//   cleanRandowmWordArray.push(tempWord.replace(".", ""));
// }
// console.log(randomWordArray);
// for (var i = 0; randomWordArray.length > i; i++) {
//   if (randomWordArray[i] !== cleanRandowmWordArray[i]) {
    // console.log(randomWordArray[i] + "----" + cleanRandowmWordArray[i]);
//   } else {
  //  console.log(randomWordArray[i] + "++++" + cleanRandowmWordArray[i]);
//   }
// }
// var shopping = ["Moto", "Auto", "Computer", "Ekip"];
// console.log(shopping);
// for (var i = 0; shopping.length > i; i++) {
//   console.log(i + 1 + ")  " + shopping[i]);
// }
var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// number 1
var products = ['Underpants:6.99',
                'Socks:5.99',
                'T-shirt:14.99',
                'Trousers:31.99',
                'Shoes:23.99'];
var nameArray = [];
var priceArray = [];
for (var i = 0; i < products.length ; i++) { // number 2
  // number 3
priceArray.push(products[i].split(':'));
priceArray[i][1] = Number(priceArray[i][1]);

  // number 4
total+=priceArray[i][1];
  // number 5
  itemText = priceArray[i][0] + ' — $' + priceArray[i][1];

  var listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);