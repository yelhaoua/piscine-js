const vowels = /[aeio]/gi;
const vowelDots = (txt) => {
  return txt.replace(vowels, "$&.");
};
