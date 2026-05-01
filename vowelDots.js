const vowelDots = (txt) => {
  const vowels = /[aeio]/gi;
  return txt.replace(vowels, "$&.");
};

vowelDots("something");
