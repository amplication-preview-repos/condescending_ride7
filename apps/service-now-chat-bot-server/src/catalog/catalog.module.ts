import { Module } from "@nestjs/common";
import { CatalogModuleBase } from "./base/catalog.module.base";
import { CatalogService } from "./catalog.service";
import { CatalogController } from "./catalog.controller";
import { CatalogResolver } from "./catalog.resolver";

@Module({
  imports: [CatalogModuleBase],
  controllers: [CatalogController],
  providers: [CatalogService, CatalogResolver],
  exports: [CatalogService],
})
export class CatalogModule {}
