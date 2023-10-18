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
