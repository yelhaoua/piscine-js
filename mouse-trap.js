const body = document.body;

let lastCircle = null;
let box = null;



export const createCircle = () => {
  body.addEventListener("click", (e) => {
    console.log("s");

    let div = document.createElement("div");
    div.className = "circle";
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
    let boxRec = box.getBoundingClientRect();
    let x = e.clientX;
    let y = e.clientY;

    const inside =
      x > boxRec.left + 1 &&
      y > boxRec.top + 1 &&
      x + 50 < boxRec.right - 1 &&
      y + 50 < boxRec.bottom - 1;

    const trap = lastCircle.dataset.trap === "true";

    if (inside) {
      lastCircle.style.background = "var(--purple)";
      lastCircle.dataset.trap = "true";
    }

    if (trap) {
      x = Math.max(
        boxRec.left + 1,
        Math.min(x, boxRec.right - 50 - 1),
      );

      y = Math.max(
        boxRec.top + 1,
        Math.min(y, boxRec.bottom - 50 - 1),
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
