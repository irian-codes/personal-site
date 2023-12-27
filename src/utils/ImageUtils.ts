import type {ImageMetadata} from 'astro';
import Color from 'colorjs.io';
import Jimp from 'jimp';

export async function colorizeImage(
  url: string,
  colorToReplace: string,
  newColor: string
): Promise<Buffer> {
  const srcImage = await Jimp.read(url);
  const _colorToReplace = new Color(colorToReplace);
  const _newColor = new Color(newColor);

  const colorizedImage = srcImage.scan(
    0,
    0,
    srcImage.bitmap.width,
    srcImage.bitmap.height,
    // Checking color of each pixel
    function (x, y, idx) {
      const pixelColor = new Color('srgb', [
        this.bitmap.data[idx + 0] / 255,
        this.bitmap.data[idx + 1] / 255,
        this.bitmap.data[idx + 2] / 255,
      ]);

      if (pixelColor.distance(_colorToReplace) < 0.05) {
        // Replace pixelColor color with newColor
        this.bitmap.data[idx + 0] = _newColor.srgb.r * 255; // Set red channel
        this.bitmap.data[idx + 1] = _newColor.srgb.g * 255; // Set green channel
        this.bitmap.data[idx + 2] = _newColor.srgb.b * 255; // Set blue channel
      }
    }
  );

  const buffer = await colorizedImage.getBufferAsync(Jimp.MIME_PNG);

  return buffer;
}

/**
 * Type definition for Vite glob import in 'eager' mode.
 * Used like this: `import.meta.glob(path, {eager: true})`
 * Represents object containing each imported image, the key is the image path.
 *
 * Source: https://vitejs.dev/guide/features#glob-import
 */
type ViteImageGlobImport = {
  [key: string]: {
    default: ImageMetadata;
    [key: symbol]: 'Module';
  };
};

/**
 * Retrieves an array of Astro image metadata sorted by keys from the image glob import statement.
 *
 * Source: https://docs.astro.build/en/recipes/dynamically-importing-images/
 *
 * NOTE: This only works if you pass the `{eager: true}` to the glob import function.
 * Check the {@link ViteImageGlobImport} JSDoc for more info.
 *
 * @param {ViteImageGlobImport} imageGlobImport - The object returned by `import.meta.glob(path, {eager: true})`
 * @return {ImageMetadata[]} An array of image metadata sorted by keys.
 */
export function getSortedGlobImportedImages(
  imageGlobImport: ViteImageGlobImport
): ImageMetadata[] {
  const sortedKeys = Object.keys(imageGlobImport).sort();
  const sortedImages = sortedKeys.map((key) => imageGlobImport[key].default);

  return sortedImages;
}
