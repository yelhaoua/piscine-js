const sameAmount = (txt, reg1, reg2) => {
  const count1 = (txt.match(reg1) || []).length;
  const count2 = (txt.match(reg2) || []).length;
  if (count1 === 0 || count2 === 0) {
    return false;
  }
  return count1 === count2;
};

console.log(sameAmount(Date.now().toString(), /q /, /qqqqqqq/));
