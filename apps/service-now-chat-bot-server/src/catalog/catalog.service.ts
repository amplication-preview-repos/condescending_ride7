import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CatalogServiceBase } from "./base/catalog.service.base";

@Injectable()
export class CatalogService extends CatalogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
