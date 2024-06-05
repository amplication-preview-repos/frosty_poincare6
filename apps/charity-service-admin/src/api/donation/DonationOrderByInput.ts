import { SortOrder } from "../../util/SortOrder";

export type DonationOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  donor?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
