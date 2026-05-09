import { colors } from "./fifty-shades-of-cold.data.js";

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

export const compose = () => {
  let style = document.createElement("style");

  alpha.forEach((el, ind) => {
    style.textContent += `.${el.toLocaleLowerCase()}{
      background : ${colors[ind]}
    }
      `;
  });
  document.head.appendChild(style);
  let body = document.querySelector("body");
  body.addEventListener("keydown", (e) => {
    let alldiv = Array.from(document.querySelectorAll("div"));
    console.log(e);

    let div = document.createElement("div");
    if (e.key === "Backspace") {
      if (alldiv) {
        body.lastChild.remove();
      }
    } else if (e.key === "Escape") {
      body.textContent = "";
    } else {
      if (e.key.toLocaleLowerCase() === e.key) {
        div.className = "note " + e.key;
      } else {
        div.className = "note";
      }
      div.textContent = e.key;
      body.append(div);
    }
  });
};
