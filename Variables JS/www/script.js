var button = document.querySelector(".pressButton");

function sendName() {
  let name = prompt("Как тебя зовут?");
  if (name === null || name.length === 0) {
    alert("You motherfucker!");
  } else {
    alert("Hi " + name + ", fuck you!");
      console.log(name);
  }
}
button.addEventListener("click", sendName);
