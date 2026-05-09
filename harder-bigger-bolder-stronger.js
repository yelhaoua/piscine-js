export const generateLetters = () => {
  const alpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let body = document.querySelector("body");
  for (let i = 0; i < 120; i++) {
    let div = document.createElement("div");
    console.log(Math.floor(Math.random() * alpha.length));
    div.textContent = alpha[Math.floor(Math.random() * alpha.length)];
    div.style.fontSize = 11 + i + "px";
    if (i <= 40) {
      div.style.fontWeight = 300;
    } else if (i > 40 && i <= 80) {
      div.style.fontWeight = 400;
    } else {
      div.style.fontWeight = 600;
    }

    body.appendChild(div);
  }
};
