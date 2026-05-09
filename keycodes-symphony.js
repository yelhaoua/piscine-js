export const compose = () => {
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
      div.className = "note";
      const hue = (e.keyCode * 137.5) % 360;
      div.style.backgroundColor = `hsl(${hue}, 70%, 60%)`;
      div.textContent = e.key;
      body.append(div);
    }
  });
};
