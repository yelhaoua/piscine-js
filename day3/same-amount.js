const sameAmount = (txt, reg1, reg2) => {
  const regex1 = new RegExp(
    reg1.source,
    reg1.flags.includes("g") ? reg1.flags : reg1.flags + "g",
  );
  const regex2 = new RegExp(
    reg2.source,
    reg2.flags.includes("g") ? reg2.flags : reg2.flags + "g",
  );
  const count1 = (txt.match(regex1) || []).length;
  const count2 = (txt.match(regex2) || []).length;

  if (txt.match(regex1) == null || txt.match(regex2) == null) {
    return false;
  }

  return count1 === count2 ? true : false;
};
