import { readFile } from "node:fs/promises";

const reverse = async (content) => {
  let res = "";
  let arr = [];

  if (content.length === 1) {
    console.log(content);
  }
  arr = content.split(" ");

  arr.forEach((el) => {
    let splitsize;
    let woordlen = el.length;
    if (woordlen % 2 === 0) {
      splitsize = woordlen / 2;
    } else {
      splitsize = Math.ceil(woordlen / 2) - 1;
    }

    res += el.slice(splitsize, el.length);
    res += el.slice(0, splitsize);
    res += " ";
  });

  console.log(res);
};

try {
  const filePath = new URL(process.argv[2], import.meta.url);
  const contents = await readFile(filePath, { encoding: "utf8" });
  reverse(contents.trim());
} catch (err) {
  console.error(err.message);
}
