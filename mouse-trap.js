const body = document.body;

let lastCircle = null;
let box = null;

const CIRCLE_SIZE = 50;

export const createCircle = () => {
  body.addEventListener("click", (e) => {
    const div = document.createElement("div");

    div.className = "circle";

    div.style.position = "absolute";
    div.style.left = e.clientX + "px";
    div.style.top = e.clientY + "px";

    div.style.backgroundColor = "white";

    body.appendChild(div);

    lastCircle = div;
  });
};

export const moveCircle = () => {
  body.addEventListener("mousemove", (e) => {
    if (!lastCircle || !box) return;

    const boxRect = box.getBoundingClientRect();

    let x = e.clientX;
    let y = e.clientY;

    const inside =
      x > boxRect.left + 1 &&
      y > boxRect.top + 1 &&
      x + CIRCLE_SIZE < boxRect.right - 1 &&
      y + CIRCLE_SIZE < boxRect.bottom - 1;

    let trapped = lastCircle.dataset.trapped === "true";

    if (inside) {
      lastCircle.style.background = "var(--purple)";
      lastCircle.dataset.trapped = "true";
      trapped = true;
    }

    if (trapped) {
      x = Math.max(
        boxRect.left + 1,
        Math.min(x, boxRect.right - CIRCLE_SIZE - 1),
      );

      y = Math.max(
        boxRect.top + 1,
        Math.min(y, boxRect.bottom - CIRCLE_SIZE - 1),
      );
    }

    lastCircle.style.left = x + "px";
    lastCircle.style.top = y + "px";
  });
};

export const setBox = () => {
  box = document.createElement("div");

  box.className = "box";

  body.appendChild(box);
};
