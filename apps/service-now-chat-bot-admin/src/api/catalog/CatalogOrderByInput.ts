import { SortOrder } from "../../util/SortOrder";

export type CatalogOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  catalogId?: SortOrder;
};
