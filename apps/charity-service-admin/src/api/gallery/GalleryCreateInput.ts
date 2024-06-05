import { InputJsonValue } from "../../types";

export type GalleryCreateInput = {
  description?: string | null;
  image?: InputJsonValue;
  title?: string | null;
};
