const debounce = (fn, dely) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, dely);
  };
};

const opDebounce = (fn, dely, option = false) => {
  let timeout;
  return function (...args) {
    const callNow = !timeout && option;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      if (!option) {
        fn(...args);
      }
    }, dely);
    if (callNow) {
      fn(...args);
    }
  };
};
