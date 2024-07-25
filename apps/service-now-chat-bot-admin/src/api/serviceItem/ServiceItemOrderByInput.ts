import { SortOrder } from "../../util/SortOrder";

export type ServiceItemOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  itemId?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  price?: SortOrder;
  catalogId?: SortOrder;
};
