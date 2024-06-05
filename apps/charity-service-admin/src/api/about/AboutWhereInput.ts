import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AboutWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
};
