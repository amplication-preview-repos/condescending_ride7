import * as graphql from "@nestjs/graphql";
import { ServiceRequestResolverBase } from "./base/serviceRequest.resolver.base";
import { ServiceRequest } from "./base/ServiceRequest";
import { ServiceRequestService } from "./serviceRequest.service";

@graphql.Resolver(() => ServiceRequest)
export class ServiceRequestResolver extends ServiceRequestResolverBase {
  constructor(protected readonly service: ServiceRequestService) {
    super(service);
  }
}
