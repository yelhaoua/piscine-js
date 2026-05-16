async function getJSON(path, query) {
  let que;
  let par;

  for (let [key, val] of Object.entries(query)) {
    if (key === "query") {
      que = "?query=" + val.split(" ").join("+");
    } else {
      par = "&" + key + "=" + val;
    }
  }
  let url;

  if (que) {
    url = path + que + par;
  } else {
    url = path + par;
  }

  let response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  let res = await response.json();
  if (res.error) {
    throw new Error(res.error);
  }

  return res.data;
}
