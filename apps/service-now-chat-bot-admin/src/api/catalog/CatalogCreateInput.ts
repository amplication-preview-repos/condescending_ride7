import { ServiceItemCreateNestedManyWithoutCatalogsInput } from "./ServiceItemCreateNestedManyWithoutCatalogsInput";

export type CatalogCreateInput = {
  name?: string | null;
  description?: string | null;
  catalogId?: string | null;
  serviceItems?: ServiceItemCreateNestedManyWithoutCatalogsInput;
};
