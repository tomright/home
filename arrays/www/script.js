var randomWord =
  "Потребность в SSL-сертификатах возникла у меня в связи с тем, что срок старых истёк, а создать новые оказалось невозможным из-за возникших ограничений на доменные зоны RU и РФ. Если у вас такая же проблема или вам просто надоело искать веб-сервис для выпуска SSL-сертификатов, то эта заметка вам поможет.";
var randomWordArray = randomWord.split(" ");
var cleanRandowmWordArray = [];
for (var i = 0; randomWordArray.length > i; i++) {
  tempWord = randomWordArray[i].replace(",", "");
  cleanRandowmWordArray.push(tempWord.replace(".", ""));
}
console.log(randomWordArray);
for (var i = 0; randomWordArray.length > i; i++) {
  if (randomWordArray[i] !== cleanRandowmWordArray[i]) {
    console.log(randomWordArray[i] + "----" + cleanRandowmWordArray[i]);
  } else {
    // console.log(randomWordArray[i] + "++++" + cleanRandowmWordArray[i]);
  }
}
// var shopping = ["Moto", "Auto", "Computer", "Ekip"];
// console.log(shopping);
// for (var i = 0; shopping.length > i; i++) {
//   console.log(i + 1 + ")  " + shopping[i]);
// }
