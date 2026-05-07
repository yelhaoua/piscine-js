const filterShortStateName = (arr) => {
  return arr.filter((el) => {
    return el.length < 7;
  });
};

const filterStartVowel = (arr) => {
  return arr.filter((el) => {
    return (
      el[0].toLowerCase() === "a" ||
      el[0].toLowerCase() === "e" ||
      el[0].toLowerCase() === "i" ||
      el[0].toLowerCase() === "o" ||
      el[0].toLowerCase() === "u"
    );
  });
};

const filter5Vowels = (arr) => {
  return arr.filter((el) => {
    let count = 0;
    for (let i = 0; i < el.length; i++) {
      if (
        el[i].toLowerCase() === "a" ||
        el[i].toLowerCase() === "e" ||
        el[i].toLowerCase() === "i" ||
        el[i].toLowerCase() === "o" ||
        el[i].toLowerCase() === "u"
      ) {
        count++;
      }
    }
    if (count >= 5) {
      return el;
    }
  });
};

const filter1DistinctVowel = (arr) => {
  let flag = false;
  return arr.filter((el) => {
    const vol = CheckVoles(el.toLowerCase());
    for (let i = 0; i < vol.length; i++) {
      if (el.includes(vol[i])) {
        flag = true;
      }
    }
    if (!flag) {
      return el;
    }
    flag = false;
  });
};

function CheckVoles(str) {
  let flag = true;
  let voel = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    if (
      (str[i] === "a" ||
        str[i] === "e" ||
        str[i] === "i" ||
        str[i] === "o" ||
        str[i] === "u") &&
      flag
    ) {
      voel = voel.filter((el) => {
        return el !== str[i];
      });
      break;
    }
  }
  return voel;
}

const multiFilter = (arr) => {
  return arr.filter((el) => {
    if (
      el.capital.length >= 8 &&
      !el.name.toLowerCase().startsWith("a") &&
      !el.name.toLowerCase().startsWith("e") &&
      !el.name.toLowerCase().startsWith("i") &&
      !el.name.toLowerCase().startsWith("o") &&
      !el.name.toLowerCase().startsWith("u") &&
      (el.tag.toLowerCase().includes("a") ||
        el.tag.toLowerCase().includes("e") ||
        el.tag.toLowerCase().includes("i") ||
        el.tag.toLowerCase().includes("o") ||
        el.tag.toLowerCase().includes("u")) &&
      el.region != "South"
    ) {
      return el;
    }
  });
};
