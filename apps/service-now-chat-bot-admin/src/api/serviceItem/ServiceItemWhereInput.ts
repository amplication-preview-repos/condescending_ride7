import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { CatalogWhereUniqueInput } from "../catalog/CatalogWhereUniqueInput";

export type ServiceItemWhereInput = {
  id?: StringFilter;
  itemId?: StringNullableFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  price?: FloatNullableFilter;
  catalog?: CatalogWhereUniqueInput;
};
