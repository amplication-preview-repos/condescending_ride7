import { CatalogWhereInput } from "./CatalogWhereInput";
import { CatalogOrderByInput } from "./CatalogOrderByInput";

export type CatalogFindManyArgs = {
  where?: CatalogWhereInput;
  orderBy?: Array<CatalogOrderByInput>;
  skip?: number;
  take?: number;
};
