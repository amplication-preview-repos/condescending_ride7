import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ServiceItemService } from "./serviceItem.service";
import { ServiceItemControllerBase } from "./base/serviceItem.controller.base";

@swagger.ApiTags("serviceItems")
@common.Controller("serviceItems")
export class ServiceItemController extends ServiceItemControllerBase {
  constructor(protected readonly service: ServiceItemService) {
    super(service);
  }
}
