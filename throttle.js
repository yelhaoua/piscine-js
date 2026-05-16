const throttle = (fn, dely) => {
  let time = 0;
  return function (...args) {
    let curent = Date.now();
    if (curent - time >= dely) {
      time = curent;
      fn(...args);
    }
  };
};

const opThrottle = (
  fn,
  wait,
  options = { leading: false, trailing: false },
) => {
  let waiting = false;
  let nextArgs = null;

  const run = () => {
    if (nextArgs != null) {
      fn(nextArgs);
    } else {
      waiting = false;
    }
  };

  return function (...args) {
    if (waiting) {
      if (options.trailing) {
        nextArgs = args;
      }
      return;
    }
    if (options.leading) {
      fn(...args);
    } else {
      nextArgs = args;
    }
    waiting = true;
    setTimeout(run, wait);
  };
};
