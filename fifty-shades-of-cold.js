import { colors } from "./fifty-shades-of-cold.data.js";

export const generateClasses = () => {
  let head = document.querySelector("head");
  let style = document.createElement("style");
  colors.forEach((el) => {
    style.textContent += `.${el} {
        background:${el}
    }
    `;
  });

  head.appendChild(style);
};

export const generateColdShades = () => {
  let body = document.querySelector("body");
  colors.forEach((el) => {
    let div = document.createElement("div");
    div.textContent = el;
    div.className = el;
    body.appendChild(div);
  });
};

export const choseShade = (color) => {
  let allDiv = document.querySelectorAll("div");
  allDiv.forEach((el) => {
    el.classList.forEach((cl) => {
      el.classList.remove(cl);
    });
    el.className = color;
  });
};
