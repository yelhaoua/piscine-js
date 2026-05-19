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

  // 🔐 AUTH CHECK
  const auth = req.headers.authorization;

  if (!auth || !auth.startsWith("Basic ")) {
    res.statusCode = 401;
    return res.end(JSON.stringify({ error: "Authorization Required" }));
  }

  const base64 = auth.split(" ")[1];
  const decoded = Buffer.from(base64, "base64").toString();
  const [username, pass] = decoded.split(":");

  if (!users.has(username) || pass !== password) {
    res.statusCode = 401;
    return res.end(JSON.stringify({ error: "Authorization Required" }));
  }

  // ✅ AUTHORIZED
  const file = req.url.slice(1);

  let body = "";

  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", async () => {
    try {
      await mkdir("./guests", { recursive: true });

      let parsed;
      try {
        parsed = JSON.parse(body);
      } catch {
        parsed = body;
      }

      await writeFile(`./guests/${file}.json`, JSON.stringify(parsed, null, 2));

      // 🔥 IMPORTANT: 200 not 201 in example
      res.statusCode = 200;
      res.end(JSON.stringify(parsed));
    } catch (error) {
      res.statusCode = 500;
      res.end(JSON.stringify({ error: "server failed" }));
    }
  });
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
