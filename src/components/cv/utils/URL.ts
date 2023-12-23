/**
 * Function that points to Astro's public directory.
 * This is needed because otherwise when building
 * it won't find the files. It seems referencing
 * from '/' alone is not enough for Astro to
 * get the public folder inside the React part
 * of the code.
 */
export function getPublicAssetsURL(): string {
  return './public';
}
