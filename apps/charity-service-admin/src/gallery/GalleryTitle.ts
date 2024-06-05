import { Gallery as TGallery } from "../api/gallery/Gallery";

export const GALLERY_TITLE_FIELD = "title";

export const GalleryTitle = (record: TGallery): string => {
  return record.title?.toString() || String(record.id);
};
