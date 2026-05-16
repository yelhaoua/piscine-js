import { styles } from "./pimp-my-style.data.js";
let count = 0;
let icrees = styles.length - 1;
let flag = true;
export const pimp = () => {
  let button = document.querySelector("button");
  if (icrees === 0) {
    button.classList.remove(styles[0]);
    button.classList.remove("unpimp");
    count = 0;
    icrees = styles.length - 1;
    flag = false;
  }
  if (count < styles.length && flag) {
    button.classList.add(styles[count]);
    count++;
    if (count === styles.length) {
      button.classList.add("unpimp");
    }
  } else {
    button.classList.remove(styles[icrees]);
    icrees--;
  }
  flag = true;
};
