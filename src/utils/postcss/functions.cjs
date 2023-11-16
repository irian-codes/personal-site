const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = {
  /**
   * Generates a string of multiple box shadows concatenated.
   *
   * @param {number} num - The number of box shadows to generate.
   * @param {string} color - The color of the box shadows.
   * @param {string} minPx - The minimum pixel value for the box shadows.
   * @param {string} maxPx - The maximum pixel value for the box shadows.
   * @return {string} The generated box shadows.
   */
  multipleBoxShadow(num, color, minPx, maxPx) {
    const parsedMinPx = parseInt(minPx, 10);
    const parsedMaxPx = parseInt(maxPx, 10);

    const values = [];

    for (let i = 0; i < num; i++) {
      values.push(
        `${getRandomInt(parsedMinPx, parsedMaxPx)}px ${getRandomInt(
          parsedMinPx,
          parsedMaxPx
        )}px ${color}`
      );
    }

    return values.join(', ');
  },
};
