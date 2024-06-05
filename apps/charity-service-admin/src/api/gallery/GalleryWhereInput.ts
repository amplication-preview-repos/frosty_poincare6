import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type GalleryWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  image?: JsonFilter;
  title?: StringNullableFilter;
};
