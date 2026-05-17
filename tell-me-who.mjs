import { readdir } from "fs/promises";

try {
  let files = await readdir(process.argv[2]);
  files = files.map((el, ind) => {
    return el.replaceAll(".json", "").split("_").reverse().join(" ");
  });
  files.sort().forEach((el, ind) => {
    let res = el.replaceAll(".json", "").split("_").join(" ");
    console.log(ind + 1 + ".", res);
  });
} catch (error) {
  console.log(error);
}
