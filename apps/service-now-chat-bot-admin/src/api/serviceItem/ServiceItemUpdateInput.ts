import { CatalogWhereUniqueInput } from "../catalog/CatalogWhereUniqueInput";

export type ServiceItemUpdateInput = {
  itemId?: string | null;
  name?: string | null;
  description?: string | null;
  price?: number | null;
  catalog?: CatalogWhereUniqueInput | null;
};
