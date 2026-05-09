export const getArchitects = () => {
  const allA = Array.from(document.getElementsByTagName("a"));
  const AllNotA = Array.from(document.getElementsByTagName("span"));

  return [allA, AllNotA];
};

export const getClassical = () => {
  const allClassical = Array.from(document.querySelectorAll("a.classical"));
  const allClassicalWhitNonClassical = Array.from(
    document.querySelectorAll("a:not(.classical)"),
  );

  return [allClassical, allClassicalWhitNonClassical];
};

export const getActive = () => {
  const allClassicalActive = Array.from(
    document.querySelectorAll("a.classical.active"),
  );
  let allNotClassicalActive = Array.from(
    document.querySelectorAll("a.classical:not(.active)"),
  );

  return [allClassicalActive, allNotClassicalActive];
};
export const getBonannoPisano = () => {
  const BonannoPisano = Array.from(document.querySelectorAll("#BonannoPisano"));
  const allClassicalactive = Array.from(
    document.querySelectorAll("a.classical.active:not(#BonannoPisano)"),
  );
  return [BonannoPisano, allClassicalactive];
};
