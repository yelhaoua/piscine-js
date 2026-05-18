import { readFile } from "node:fs/promises";
import { writeFile } from "node:fs/promises";
import { Buffer } from "node:buffer";

let out = process.argv[4];
const name = process.argv[2];
const cypher = process.argv[3];

if (!out) {
  out = cypher === "encode" ? "cypher.txt" : "clear.txt";
}

try {
  let file = await readFile(name, { encoding: "utf8" });
  if (cypher == "encode") {
    file = Buffer.from(file).toString("base64");
    await writeFile(out, file);
  } else {
    file = Buffer.from(file, "base64").toString("utf8");
    await writeFile(out, file);
  }
} catch (err) {
  console.error(err);
}
