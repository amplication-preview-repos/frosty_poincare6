import { SortOrder } from "../../util/SortOrder";

export type GalleryOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
