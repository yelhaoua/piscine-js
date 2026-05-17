import { writeFile } from "fs/promises";

const save = async () => {
  let res = "";
  let arr = [];
  if (process.argv[2].length > 0) {
    if (process.argv[2].length === 1) {
      writeFile("./verydisco-forever.txt", process.argv[2]);
    }
    arr = process.argv[2].split(" ");
    arr.forEach((el) => {
      let splitsize;
      let woordlen = el.length;
      if (woordlen % 2 === 0) {
        splitsize = woordlen / 2;
      } else {
        splitsize = Math.ceil(woordlen / 2);
      }
      res += el.slice(splitsize, el.length);
      res += el.slice(0, splitsize);
      res += " ";
    });
    writeFile("./verydisco-forever.txt", res.trim());
  }
};

save();
