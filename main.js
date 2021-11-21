document.querySelector("#mode").onclick = () => {
  document.body.classList.toggle("light");
}

const p = document.querySelector("p");

var pClear = p.innerText.replaceAll(" ","")

var pSplit = pClear.split("");

let totalText = 0;
pSplit.forEach(letter => {
  pSplit[totalText] = `<span id="s${totalText}">${letter}</span>`;
  totalText++;
})
p.innerText = "";

p.innerHTML = pSplit.join("");

const ranLetter = "qwertyuclass=iopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890@#$%&+*:;~`•";

function getRanLetter() {
  var ranNum = Math.floor(Math.random() * ranLetter.length);
  var ranNumSpan = Math.floor(Math.random() * totalText);

  var spanId = document.querySelector(`#s${ranNumSpan}`).innerText = (ranLetter.split(""))[ranNum];

}
document.body.onload = function() {
  setInterval(() => {
    for (let i = 0; i <= 1000; i++) {
      setInterval(() => {
        getRanLetter();
      }, Math.random() * 5);
    }
  }, 0);
}
