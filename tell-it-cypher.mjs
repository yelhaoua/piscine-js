import { readFile, writeFile } from "fs/promises";

const inputFile = process.argv[2];
const mode = process.argv[3];
const outputFile = process.argv[4];

try {
  const data = await readFile(inputFile, "utf-8");

  if (mode === "encode") {
    const encoded = Buffer.from(data).toString("base64");
    await writeFile(outputFile || "cypher.txt", encoded);
  } else if (mode === "decode") {
    const decoded = Buffer.from(data, "base64").toString("utf-8");
    await writeFile(outputFile || "clear.txt", decoded);
  }
} catch (error) {
  console.log(error);
}
