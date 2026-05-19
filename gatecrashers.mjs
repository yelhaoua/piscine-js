import http from "node:http";
import { writeFile, mkdir } from "node:fs/promises";

const SERVER_PORT = 5000;
const DIRECTORY_PATH = "./guests";

const allowedUsers = ["Caleb_Squires", "Tyrique_Dalton", "Rahima_Young"];

const passwordKey = "abracadabra";

const sendResponse = (response, statusCode, data) => {
  response.writeHead(statusCode, {
    "Content-Type": "application/json",
  });

  response.end(JSON.stringify(data));
};

const sendUnauthorized = (response) => {
  response.writeHead(401, {
    "Content-Type": "application/json",
  });

  response.end("Authorization Required");
};

const validateAuthorization = (requestHeaders) => {
  const authorizationHeader = requestHeaders.authorization;

  if (!authorizationHeader) return false;

  const authParts = authorizationHeader.split(" ");

  if (authParts.length !== 2 || authParts[0] !== "Basic") {
    return false;
  }

  let decodedCredentials = "";

  try {
    decodedCredentials = Buffer.from(authParts[1], "base64").toString("utf8");
  } catch {
    return false;
  }

  const [username, password] = decodedCredentials.split(":");

  return allowedUsers.includes(username) && password === passwordKey;
};

const parseRequestBody = (request) => {
  try {
    return JSON.parse(request.headers.body || "{}");
  } catch {
    return null;
  }
};

const appServer = http.createServer(async (request, response) => {
  const { method, url } = request;

  if (method !== "POST") {
    return sendResponse(response, 405, {
      error: "Method not allowed",
    });
  }

  if (!validateAuthorization(request.headers)) {
    return sendUnauthorized(response);
  }

  const guestFileName = url.slice(1);

  if (!guestFileName) {
    return sendResponse(response, 400, {
      error: "Invalid guest name",
    });
  }

  const requestBody = parseRequestBody(request);

  if (!requestBody) {
    return sendResponse(response, 400, {
      error: "Invalid JSON",
    });
  }

  await mkdir(DIRECTORY_PATH, { recursive: true });

  await writeFile(
    `${DIRECTORY_PATH}/${guestFileName}.json`,
    JSON.stringify(requestBody, null, 2),
  );

  return sendResponse(response, 200, requestBody);
});

appServer.listen(SERVER_PORT, () => {
  console.log(`Server running on port ${SERVER_PORT}`);
});
