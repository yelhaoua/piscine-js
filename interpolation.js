const interpolation = ({ step, start, end, callback, duration }) => {
  let d = (end - start) / step;
  let t = duration / step;

  for (let i = 0; i < step; i++) {
    setTimeout(
      () => {
        let x = start + i * d;
        let y = t * (i + 1);

        callback([x, y]);
      },
      t * (i + 1),
    );
  }
};
