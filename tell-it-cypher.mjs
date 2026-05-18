import { readFile, writeFile, readdir } from "fs/promises";
import { buffer } from "stream/consumers";

let filepathe = process.argv[2];
let fileencode = process.argv[3];
let fileName = process.argv[4];

const data = await readFile(filepathe, "utf-8");

if (fileencode === "encode") {
  await writeFile(
    fileName ? fileName : "cypher.txt",
    Buffer.from(data).toString("base64"),
  );
} else if (fileencode === "decode") {
  await writeFile(
    fileName ? fileName : "clear.txt",
    Buffer.from(data, "base64").toString("utf-8"),
  );
}
