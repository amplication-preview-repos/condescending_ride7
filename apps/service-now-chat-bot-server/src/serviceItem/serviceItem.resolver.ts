import * as graphql from "@nestjs/graphql";
import { ServiceItemResolverBase } from "./base/serviceItem.resolver.base";
import { ServiceItem } from "./base/ServiceItem";
import { ServiceItemService } from "./serviceItem.service";

@graphql.Resolver(() => ServiceItem)
export class ServiceItemResolver extends ServiceItemResolverBase {
  constructor(protected readonly service: ServiceItemService) {
    super(service);
  }
}
