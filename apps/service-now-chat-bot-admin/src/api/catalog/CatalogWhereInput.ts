import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ServiceItemListRelationFilter } from "../serviceItem/ServiceItemListRelationFilter";

export type CatalogWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  catalogId?: StringNullableFilter;
  serviceItems?: ServiceItemListRelationFilter;
};
