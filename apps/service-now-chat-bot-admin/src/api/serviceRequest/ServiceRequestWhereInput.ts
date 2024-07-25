import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ServiceRequestWhereInput = {
  id?: StringFilter;
  requestId?: StringNullableFilter;
  description?: StringNullableFilter;
  created?: DateTimeNullableFilter;
  status?: "Option1";
};
