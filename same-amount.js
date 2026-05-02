const sameAmount = (txt, reg1, reg2) => {
  const count1 = (txt.match(reg1) || []).length;
  const count2 = (txt.match(reg2) || []).length;

  return count1 === count2;
};
