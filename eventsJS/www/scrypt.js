const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * number);
}

function bgChange(e) {
  const rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  e.target.style.backgroundColor = rndCol;
}

function bgReset() {
  document.body.style.backgroundColor = "white";
}

btn.addEventListener('click', bgChange);
