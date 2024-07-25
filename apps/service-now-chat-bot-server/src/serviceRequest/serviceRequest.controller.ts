import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ServiceRequestService } from "./serviceRequest.service";
import { ServiceRequestControllerBase } from "./base/serviceRequest.controller.base";

@swagger.ApiTags("serviceRequests")
@common.Controller("serviceRequests")
export class ServiceRequestController extends ServiceRequestControllerBase {
  constructor(protected readonly service: ServiceRequestService) {
    super(service);
  }
}
