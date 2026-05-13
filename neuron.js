const neuron = (arr) => {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let res = arr[i].split(" - ");
    let finel1 = res[0].split(": ");
    let finel2 = res[1].split(": ");
    let category = finel1[0].trim().toLowerCase();
    let value = finel1[1].trim();
    let response = finel2[1].trim();
    let key = value.toLowerCase().replace(/[!?]/g, "").split(" ").join("_");
    let type = category.slice(0, category.length - 1);
    if (!obj[category]) {
      obj[category] = {};
    }
    if (!obj[category][key]) {
      obj[category][key] = {
        [type]: value,
        responses: [],
      };
    }
    obj[category][key].responses.push(response);
  }
  return obj;
};
