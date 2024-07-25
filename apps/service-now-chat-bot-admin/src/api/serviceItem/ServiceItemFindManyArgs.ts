import { ServiceItemWhereInput } from "./ServiceItemWhereInput";
import { ServiceItemOrderByInput } from "./ServiceItemOrderByInput";

export type ServiceItemFindManyArgs = {
  where?: ServiceItemWhereInput;
  orderBy?: Array<ServiceItemOrderByInput>;
  skip?: number;
  take?: number;
};
