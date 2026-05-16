const queryServers = (serverName, q) => {
  const normal = `/${serverName}?q=${q}`;
  const backup = `/${serverName}_backup?q=${q}`;
  return Promise.race([getJSON(normal), getJSON(backup)]);
};
const gougleSearch = async (q) => {
  const time = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("timeout"));
    }, 80);
  });
  let out = Promise.all([
    queryServers("image", q),
    queryServers("video", q),
    queryServers("web", q),
  ]).then(([image, video, web]) => ({
    image,
    video,
    web,
  }));
  return Promise.race([out, time]);
};
