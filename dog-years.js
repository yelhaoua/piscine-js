const dogYears = (planet, seconds) => {
    const res = (seconds / 31557600) * 7;
    console.log(res.toFixed(2));
};

dogYears("d", 1000000000);
