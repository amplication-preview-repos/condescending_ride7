import * as graphql from "@nestjs/graphql";
import { CatalogResolverBase } from "./base/catalog.resolver.base";
import { Catalog } from "./base/Catalog";
import { CatalogService } from "./catalog.service";

@graphql.Resolver(() => Catalog)
export class CatalogResolver extends CatalogResolverBase {
  constructor(protected readonly service: CatalogService) {
    super(service);
  }
}
