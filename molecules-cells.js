const RNA = (txt) => {
  let res = "";

  for (let i = 0; i <= txt.length; i++) {
    switch (txt[i]) {
      case "T":
        res += "A";
        break;
      case "C":
        res += "G";
        break;
      case "A":
        res += "U";
        break;
      case "G":
        res += "C";
        break;

      default:
        break;
    }
  }
  return res;
};

const DNA = (txt) => {
  let res = "";
  for (let i = 0; i <= txt.length; i++) {
    switch (txt[i]) {
      case "C":
        res += "G";
        break;
      case "G":
        res += "C";
        break;
      case "A":
        res += "T";
        break;
      case "U":
        res += "A";
        break;

      default:
        break;
    }
  }
  
  return res;
};

