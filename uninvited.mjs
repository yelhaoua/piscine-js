import { writeFile } from "node:fs/promises";
import http, { createServer } from "node:http";
const port = "5000";

const server = createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  console.log(req.method);
  if (req.method !== "GET" && req.method !== "POST") {
    res.statusCode = 405;
    res.end(JSON.stringify({ error: "method not allowed" }));
    return;
  }
  if (req.method === "POST") {
    let body = "";

    const file = req.url.slice(1);
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", async () => {
      try {
        await writeFile(`./guests/${file}.json`, body);
        res.statusCode = 201;
        res.end(body);
      } catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify({ error: "server failed" }));
      }
    });
  }
});

server.listen(port, () => {
  console.log("Server Runing On Port 5000");
});
