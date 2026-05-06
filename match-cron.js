const matchCron = (str, date) => {
  const arr = str.split(" ");

  for (let i = 0; i < arr.length; i++) {
    switch (i) {
      case 0:
        if (date.getMinutes() !== Number(arr[0]) && arr[0] != "*") {
          return false;
        }

      case 1:
        if (date.getHours() !== Number(arr[1]) && arr[1] != "*") {
          return false;
        }

      case 2:
        if (date.getDate() !== Number(arr[2]) && arr[2] != "*") {
          return false;
        }
      case 3:
        if (date.getMonth() + 1 !== Number(arr[3]) && arr[3] != "*") {
          return false;
        }

      case 4:
        if (date.getDay() !== Number(arr[4]) && arr[4] != "*") {
          return false;
        }
    }
  }
  return true;
};


