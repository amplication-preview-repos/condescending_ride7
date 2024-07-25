import { Module } from "@nestjs/common";
import { ServiceItemModuleBase } from "./base/serviceItem.module.base";
import { ServiceItemService } from "./serviceItem.service";
import { ServiceItemController } from "./serviceItem.controller";
import { ServiceItemResolver } from "./serviceItem.resolver";

@Module({
  imports: [ServiceItemModuleBase],
  controllers: [ServiceItemController],
  providers: [ServiceItemService, ServiceItemResolver],
  exports: [ServiceItemService],
})
export class ServiceItemModule {}
