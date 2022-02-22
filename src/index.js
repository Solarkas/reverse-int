module.exports = function reverse(n) {
    const numberMassiv = [...("" + n)].map(Number);
    const filterMassiv = numberMassiv.filter((e) => e === e);
    const reverseMassiv = filterMassiv.reverse();
    return reverseMassiv.join("");
};
