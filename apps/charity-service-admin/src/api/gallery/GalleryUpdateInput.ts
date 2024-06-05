import { InputJsonValue } from "../../types";

export type GalleryUpdateInput = {
  description?: string | null;
  image?: InputJsonValue;
  title?: string | null;
};
