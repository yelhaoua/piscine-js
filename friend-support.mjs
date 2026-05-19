import http from "node:http";
import { readFile } from "node:fs/promises";

const port = 5000;

const server = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method !== "GET") {
    res.statusCode = 500;
    return res.end(JSON.stringify({ error: "server failed" }));
  }

  const name = req.url.slice(1);
  const path = `./guests/${name}.json`;

  try {
    const data = await readFile(path, "utf-8");

    res.statusCode = 200;
    return res.end(data);
  } catch (err) {
    if (err.code === "ENOENT") {
      res.statusCode = 404;
      return res.end(
        JSON.stringify({
          error: "guest not found",
        }),
      );
    }

    res.statusCode = 500;
    return res.end(
      JSON.stringify({
        error: "server failed",
      }),
    );
  }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
