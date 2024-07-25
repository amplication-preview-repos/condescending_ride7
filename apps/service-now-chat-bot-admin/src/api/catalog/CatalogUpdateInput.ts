import { ServiceItemUpdateManyWithoutCatalogsInput } from "./ServiceItemUpdateManyWithoutCatalogsInput";

export type CatalogUpdateInput = {
  name?: string | null;
  description?: string | null;
  catalogId?: string | null;
  serviceItems?: ServiceItemUpdateManyWithoutCatalogsInput;
};
