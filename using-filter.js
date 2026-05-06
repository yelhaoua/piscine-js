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
  return arr.filter((el) => {
    CheckVoles();
  });
};

function CheckVoles(el) {
  let flag = true;
  let voel = "aeiou";
  for (let i = 0; i < el.length; i++) {
    if (
      el[i].toLowerCase() === "a" ||
      ((el[i].toLowerCase() === "e" ||
        el[i].toLowerCase() === "i" ||
        el[i].toLowerCase() === "o" ||
        el[i].toLowerCase() === "u") &&
        flag)
    ) {
        console.log(el[i]);
        
      console.log(voel.split(""));

      flag = false;
      break;
    }
  }
  console.log(voel);
}

console.log(CheckVoles("Alabama".toLowerCase()));
