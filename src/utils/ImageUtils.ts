import {ColorActionName} from '@jimp/plugin-color';
import Jimp from 'jimp';

export async function changeImageHue(
  url: string,
  degreesToRotateHue: number
): Promise<Buffer> {
  const srcImage = await Jimp.read(url);

  const colorizedImage = srcImage.color([
    {apply: ColorActionName.HUE, params: [degreesToRotateHue]},
  ]);

  const buffer = await colorizedImage.getBufferAsync(Jimp.MIME_PNG);

  return buffer;
}
