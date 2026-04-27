const dogYears = (planet, seconds) => {
    const res = (seconds / 31557600) * 7;
    return res.toFixed(2);
};
