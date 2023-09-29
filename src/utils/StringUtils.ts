/**
 * Function to split a string into two lines by inserting a '\n' character at the last occurrence of a specified character.
 *
 * Example:
 *   splitStringIntoTwoLines('https://github.com/username', '/') -> 'https://github.com/\nusername'
 *
 * @param {string} str - The string to split.
 * @param {string} splitChar - The character to split the string at.
 * @param {boolean} [includeLastChar=false] - Whether to include the last character in the split.
 * @return {string} The string split into two lines.
 */
export function splitStringAtLastOccurrence(
  str: string,
  splitChar: string,
  includeLastChar: boolean = false
): string {
  let lastSplitIndex = str.lastIndexOf(splitChar);

  if (includeLastChar) {
    lastSplitIndex -= 1;
  }

  const firstPart = str.substring(0, lastSplitIndex + 1);
  const secondPart = str.substring(lastSplitIndex + 1);

  return `${firstPart}\n${secondPart}`;
}
