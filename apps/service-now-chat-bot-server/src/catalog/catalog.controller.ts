import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CatalogService } from "./catalog.service";
import { CatalogControllerBase } from "./base/catalog.controller.base";

@swagger.ApiTags("catalogs")
@common.Controller("catalogs")
export class CatalogController extends CatalogControllerBase {
  constructor(protected readonly service: CatalogService) {
    super(service);
  }
}
