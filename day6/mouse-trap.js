export const createCircle = () => {
  document.addEventListener("click", (e) => {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.background = "white";
    circle.style.left = `${e.clientX - 25}px`;
    circle.style.top = `${e.clientY - 25}px`;

    document.body.appendChild(circle);
  });
};

export const moveCircle = () => {
  document.addEventListener("mousemove", (e) => {
    const circle = document.querySelector(".circle:last-of-type");
    const box = document.querySelector(".box");
    if (!circle || !box) return;
    const bRect = box.getBoundingClientRect();

    let x = e.clientX - 25;
    let y = e.clientY - 25;
    const leftWall = bRect.left + 1;
    const rightWall = bRect.right - 50 - 1;
    const topWall = bRect.top + 1;
    const bottomWall = bRect.bottom - 50 - 1;
    const isInside =
      x >= leftWall && x <= rightWall && y >= topWall && y <= bottomWall;

    if (isInside || circle.style.background === "purple") {
      circle.style.background = "purple";
      x = Math.max(leftWall, Math.min(x, rightWall));
      y = Math.max(topWall, Math.min(y, bottomWall));
    }

    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
  });
};

export const setBox = () => {
  const box = document.createElement("div");
  box.classList.add("box");
  document.body.appendChild(box);
};
