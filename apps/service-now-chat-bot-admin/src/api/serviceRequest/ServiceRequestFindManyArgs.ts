import { ServiceRequestWhereInput } from "./ServiceRequestWhereInput";
import { ServiceRequestOrderByInput } from "./ServiceRequestOrderByInput";

export type ServiceRequestFindManyArgs = {
  where?: ServiceRequestWhereInput;
  orderBy?: Array<ServiceRequestOrderByInput>;
  skip?: number;
  take?: number;
};
