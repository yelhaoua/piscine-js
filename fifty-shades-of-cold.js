import { colors } from "./fifty-shades-of-cold.data.js";
let arr = colors.filter((el) => {
  if (
    el.includes("aqua") ||
    el.includes("blue") ||
    el.includes("turquoise") ||
    el.includes("green") ||
    el.includes("cyan") ||
    el.includes("navy") ||
    el.includes("purple")
  ) {
    return el;
  }
});
export const generateClasses = () => {
  let head = document.querySelector("head");
  let style = document.createElement("style");
  arr.forEach((el) => {
    style.textContent += `.${el} {
          background:${el}
      }
      `;
    head.appendChild(style);
  });
};

export const generateColdShades = () => {
  let body = document.querySelector("body");
  arr.forEach((el) => {
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
