import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DonationWhereInput = {
  amount?: FloatNullableFilter;
  donor?: StringNullableFilter;
  id?: StringFilter;
};
