import { Module } from "@nestjs/common";
import { ServiceRequestModuleBase } from "./base/serviceRequest.module.base";
import { ServiceRequestService } from "./serviceRequest.service";
import { ServiceRequestController } from "./serviceRequest.controller";
import { ServiceRequestResolver } from "./serviceRequest.resolver";

@Module({
  imports: [ServiceRequestModuleBase],
  controllers: [ServiceRequestController],
  providers: [ServiceRequestService, ServiceRequestResolver],
  exports: [ServiceRequestService],
})
export class ServiceRequestModule {}
