const letterSpaceNumberRg = /[a-zA-Z] \d\b/g;

const letterSpaceNumber = (txt) => {
  return txt.match(letterSpaceNumberRg) != null
    ? txt.match(letterSpaceNumberRg)
    : [];
};
