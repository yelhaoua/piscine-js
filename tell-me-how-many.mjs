import { readdir } from "node:fs/promises";

try {
  const files = await readdir(process.argv[2]);
  console.log(Number(files.length));
} catch (err) {
  console.error(err);
}
