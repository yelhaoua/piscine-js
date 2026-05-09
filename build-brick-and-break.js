export const build = (amount) => {
  let count = 1;
  let mid = 2;
  const idInterval = setInterval(() => {
    if (count === amount) {
      clearInterval(idInterval);
    }
    let div = document.createElement("div");
    let body = document.querySelector("body");
    div.setAttribute("id", `brick-${count}`);
    if (mid === count) {
      div.dataset.foundation = true;
      mid += 3;
    }
    body.appendChild(div);
    count++;
  }, 100);
};

export const repair = (...ids) => {
  console.log(ids);

  ids.forEach((el) => {
    let div = document.getElementById(el);
    if (div.hasAttribute("data-foundation")) {
      div.dataset.repaired = "true";
    } else {
      div.dataset.repaired = "in progress";
    }
  });
};

export const destroy = () => {
  let body = document.querySelector("body");
  body.lastChild.remove();
};
