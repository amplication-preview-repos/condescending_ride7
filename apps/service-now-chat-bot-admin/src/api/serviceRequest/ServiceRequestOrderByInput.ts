import { SortOrder } from "../../util/SortOrder";

export type ServiceRequestOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  requestId?: SortOrder;
  description?: SortOrder;
  created?: SortOrder;
  status?: SortOrder;
};
