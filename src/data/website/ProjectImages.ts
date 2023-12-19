import {getSortedGlobImportedImages} from '../../utils/ImageUtils';

// Project images glob import to not import each gallery item manually
// Sadly the import.meta.glob cannot be used with dynamic strings so we need a lot of repetition.
type ProjectSlug =
  | 'assistant-drivers-mobile'
  | 'assistant-drivers-desktop'
  | 'cordoba-viva-mobile'
  | 'delivery-kings-mobile'
  | 'caumma-mobile'
  | 'caumma-desktop'
  | 'medway-mobile'
  | 'duis-desktop'
  | 'mtl-mobile'
  | 'mtl-desktop';

export const projectsGalleries = new Map<
  ProjectSlug,
  ReturnType<typeof getSortedGlobImportedImages>
>([
  [
    'assistant-drivers-mobile',
    getSortedGlobImportedImages(
      import.meta.glob(
        '../../assets/images/projects/mobile-apps/assistant-drivers/*.{jpeg,jpg,png,webp,tiff,gif,svg,avif}',
        {eager: true}
      )
    ),
  ],
  [
    'assistant-drivers-desktop',
    getSortedGlobImportedImages(
      import.meta.glob(
        '../../assets/images/projects/desktop-apps/assistant-drivers-panel/*.{jpeg,jpg,png,webp,tiff,gif,svg,avif}',
        {eager: true}
      )
    ),
  ],
  [
    'cordoba-viva-mobile',
    getSortedGlobImportedImages(
      import.meta.glob(
        '../../assets/images/projects/mobile-apps/cordoba-viva/*.{jpeg,jpg,png,webp,tiff,gif,svg,avif}',
        {eager: true}
      )
    ),
  ],
  [
    'delivery-kings-mobile',
    getSortedGlobImportedImages(
      import.meta.glob(
        '../../assets/images/projects/mobile-apps/delivery-kings/*.{jpeg,jpg,png,webp,tiff,gif,svg,avif}',
        {eager: true}
      )
    ),
  ],
  [
    'caumma-mobile',
    getSortedGlobImportedImages(
      import.meta.glob(
        '../../assets/images/projects/mobile-apps/caumma/*.{jpeg,jpg,png,webp,tiff,gif,svg,avif}',
        {eager: true}
      )
    ),
  ],
  [
    'caumma-desktop',
    getSortedGlobImportedImages(
      import.meta.glob(
        '../../assets/images/projects/desktop-apps/caumma-panel/*.{jpeg,jpg,png,webp,tiff,gif,svg,avif}',
        {eager: true}
      )
    ),
  ],
  [
    'medway-mobile',
    getSortedGlobImportedImages(
      import.meta.glob(
        '../../assets/images/projects/mobile-apps/medway/*.{jpeg,jpg,png,webp,tiff,gif,svg,avif}',
        {eager: true}
      )
    ),
  ],
  [
    'duis-desktop',
    getSortedGlobImportedImages(
      import.meta.glob(
        '../../assets/images/projects/desktop-apps/duis-panel/*.{jpeg,jpg,png,webp,tiff,gif,svg,avif}',
        {eager: true}
      )
    ),
  ],
  [
    'mtl-mobile',
    getSortedGlobImportedImages(
      import.meta.glob(
        '../../assets/images/projects/mobile-apps/mtl/*.{jpeg,jpg,png,webp,tiff,gif,svg,avif}',
        {eager: true}
      )
    ),
  ],
  [
    'mtl-desktop',
    getSortedGlobImportedImages(
      import.meta.glob(
        '../../assets/images/projects/desktop-apps/mtl-panel/*.{jpeg,jpg,png,webp,tiff,gif,svg,avif}',
        {eager: true}
      )
    ),
  ],
]);
