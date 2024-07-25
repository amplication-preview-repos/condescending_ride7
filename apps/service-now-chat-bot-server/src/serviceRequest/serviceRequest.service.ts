import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ServiceRequestServiceBase } from "./base/serviceRequest.service.base";

@Injectable()
export class ServiceRequestService extends ServiceRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
