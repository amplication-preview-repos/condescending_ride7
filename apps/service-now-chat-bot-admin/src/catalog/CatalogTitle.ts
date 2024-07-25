import { Catalog as TCatalog } from "../api/catalog/Catalog";

export const CATALOG_TITLE_FIELD = "name";

export const CatalogTitle = (record: TCatalog): string => {
  return record.name?.toString() || String(record.id);
};
