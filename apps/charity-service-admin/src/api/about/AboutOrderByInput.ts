import { SortOrder } from "../../util/SortOrder";

export type AboutOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
