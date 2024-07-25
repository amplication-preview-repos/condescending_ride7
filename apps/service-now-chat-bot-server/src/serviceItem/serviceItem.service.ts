import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ServiceItemServiceBase } from "./base/serviceItem.service.base";

@Injectable()
export class ServiceItemService extends ServiceItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
