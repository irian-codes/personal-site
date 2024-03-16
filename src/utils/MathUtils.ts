export const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Maps a value from one range onto another range.
 *
 * @param {number} minA - minimum value of the input range
 * @param {number} maxA - maximum value of the input range
 * @param {number} minB - minimum value of the output range
 * @param {number} maxB - maximum value of the output range
 * @param {number} valueA - the value to be mapped
 * @return {number} the mapped value
 */
export function mapRangeOntoAnother({
  minA,
  maxA,
  minB,
  maxB,
  valueA,
}: {
  minA: number;
  maxA: number;
  minB: number;
  maxB: number;
  valueA: number;
}): number {
  const mappingScaleFactor = (maxB - minB) / (maxA - minA);
  const offset = -minA * mappingScaleFactor + minB;

  const mappedValue = Math.max(
    Math.min(valueA * mappingScaleFactor + offset, maxB),
    minB
  );

  return mappedValue;
}
