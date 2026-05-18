import { readdir, readFile, writeFile } from "fs/promises";

try {
  const filePath = process.argv[2];

  let data = await readdir(filePath);
  data = data.sort();

  let res = await Promise.all(
    data.map(async (el) => {
      const content = await readFile(filePath + "/" + el, "utf-8");
      let obj = JSON.parse(content);
      if (obj.answer === "yes") {
        return el;
      }
    }),
  );

  res = res.filter(Boolean);
  res = res.sort((a, b) => a.localeCompare(b));
  let finle = res.map((el, ind) => {
    return el.replaceAll(".json", "").split("_").reverse().join(" ");
  });
  finle = finle.sort((a, b) => a.localeCompare(b));

  finle = finle.map((el, ind) => {
    return ind  + ". " + el;
  });

  await writeFile("vip.txt", finle.join("\n"));
} catch (error) {
  console.error("Error:", error.message);
}
