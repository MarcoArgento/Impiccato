let elementcounter = document.getElementById("contatore");
let inBTN = document.getElementById("in");
let input = document.getElementById("input");
let elementguestDiv = document.getElementById("guest");

let count = 10;

function winScreen() {
  document.body.style.backgroundColor = "green";
  document.body.innerHTML = `🎉🎉🎉U WIN🎉🎉🎉<button id="restart">RESTART</button>`;
  document.getElementById("restart").addEventListener("click", () => {
    window.location.reload();
  });
}
function loseScreen() {
  document.body.style.backgroundColor = "red";
  document.body.innerHTML = `❌❌❌U LOSE❌❌❌ <button id="restart">RESTART</button>`;
  document.getElementById("restart").addEventListener("click", () => {
    window.location.reload();
  });
}

function wrongAnswer() {
  if (!parolaArr.includes(input.value)) count -= 1;
  console.log(count);
  if (parolaArr.join("") == guessed.join("")) {
    winScreen();
  }
  if (count == 0) {
    loseScreen();
  } else elementcounter.textContent = count;
}
let parolePossibili = [
  "luce",
  "notte",
  "strada",
  "albero",
  "foresta",
  "tempo",
  "fiume",
  "acqua",
  "tempio",
  "negozio",
  "musica",
  "cielo",
  "sedia",
  "casa",
  "terra",
  "lago",
  "macchina",
  "luna",
  "cielo",
  "giorno",
  "gioco",
  "vento",
  "pane",
  "uccello",
  "montagna",
  "chiesa",
  "ospedale",
  "fuoco",
  "libro",
  "monte",
  "lorenzo",
];
let randomN = parseInt(Math.random() * parolePossibili.length);

let parolaArr = parolePossibili[randomN].split("");
let guessed = [...parolaArr].fill("_");
elementguestDiv.innerHTML = guessed.join(" ");

function response() {
  switch (true) {
    case input.value.length > 1 &&
      input.value.toLowerCase() == parolePossibili[randomN]:
      elementguestDiv.innerHTML = parolaArr.join(" ");
      winScreen();
      break;
    case input.value.length == 1:
      guessed = guessed.map((letter, i) => {
        return parolaArr[i] == input.value.toLowerCase() ? input.value : letter;
      });
      elementguestDiv.innerHTML = guessed.join(" ");
      wrongAnswer();
      break;
    default:
      break;
  }
  input.value = "";
}

inBTN.addEventListener("click", response);
