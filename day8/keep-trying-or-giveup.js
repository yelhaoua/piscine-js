const retry = (count, callback) => {
  return async function (...args) {
    for (let i = 0; i < count; i++) {
      try {
        return await callback(...args);
      } catch (errore) {
        console.log(errore.message);
      }
    }
    return await callback(...args);
  };
};

export const timeout = (delay, callback) => {
  return async function (...args) {
    const timer = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("timeout")), delay),
    );

    const action = (async () => {
      const res = await callback(...args);
      return res;
    })();

    return Promise.race([action, timer]);
  };
};
