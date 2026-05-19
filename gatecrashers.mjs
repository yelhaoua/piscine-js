import { createServer } from "node:http";
import { writeFile, mkdir } from "node:fs/promises";

const port = 5000;

const users = new Set(["Caleb_Squires", "Tyrique_Dalton", "Rahima_Young"]);

const password = "abracadabra";

const server = createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method !== "POST") {
    res.statusCode = 405;
    return res.end(JSON.stringify({ error: "method not allowed" }));
  }

  // ---------------- AUTH ----------------
  const auth = req.headers.authorization;

  if (!auth || !auth.startsWith("Basic ")) {
    res.statusCode = 401;
    return res.end(JSON.stringify({ error: "Authorization Required" }));
  }

  const decoded = Buffer.from(auth.split(" ")[1], "base64").toString();
  const [username, pass] = decoded.split(":");

  if (!users.has(username) || pass !== password) {
    res.statusCode = 401;
    return res.end(JSON.stringify({ error: "Authorization Required" }));
  }

  // ---------------- BODY ----------------
  const file = req.url.slice(1);
  let body = "";

  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", async () => {
    try {
      await mkdir("./guests", { recursive: true });

      let parsedBody;
      try {
        parsedBody = JSON.parse(body);
      } catch {
        parsedBody = body;
      }

      // save file
      await writeFile(
        `./guests/${file}.json`,
        JSON.stringify(parsedBody, null, 2),
      );

      // response MUST be object (not empty string)
      res.statusCode = 200;
      res.end(JSON.stringify(parsedBody));
    } catch (error) {
      res.statusCode = 500;
      res.end(JSON.stringify({ error: "server failed" }));
    }
  });
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
