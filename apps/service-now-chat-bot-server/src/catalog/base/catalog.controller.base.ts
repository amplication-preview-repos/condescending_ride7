/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CatalogService } from "../catalog.service";
import { CatalogCreateInput } from "./CatalogCreateInput";
import { Catalog } from "./Catalog";
import { CatalogFindManyArgs } from "./CatalogFindManyArgs";
import { CatalogWhereUniqueInput } from "./CatalogWhereUniqueInput";
import { CatalogUpdateInput } from "./CatalogUpdateInput";
import { ServiceItemFindManyArgs } from "../../serviceItem/base/ServiceItemFindManyArgs";
import { ServiceItem } from "../../serviceItem/base/ServiceItem";
import { ServiceItemWhereUniqueInput } from "../../serviceItem/base/ServiceItemWhereUniqueInput";

export class CatalogControllerBase {
  constructor(protected readonly service: CatalogService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Catalog })
  async createCatalog(
    @common.Body() data: CatalogCreateInput
  ): Promise<Catalog> {
    return await this.service.createCatalog({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,
        catalogId: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Catalog] })
  @ApiNestedQuery(CatalogFindManyArgs)
  async catalogs(@common.Req() request: Request): Promise<Catalog[]> {
    const args = plainToClass(CatalogFindManyArgs, request.query);
    return this.service.catalogs({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,
        catalogId: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Catalog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async catalog(
    @common.Param() params: CatalogWhereUniqueInput
  ): Promise<Catalog | null> {
    const result = await this.service.catalog({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,
        catalogId: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Catalog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCatalog(
    @common.Param() params: CatalogWhereUniqueInput,
    @common.Body() data: CatalogUpdateInput
  ): Promise<Catalog | null> {
    try {
      return await this.service.updateCatalog({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          description: true,
          catalogId: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Catalog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCatalog(
    @common.Param() params: CatalogWhereUniqueInput
  ): Promise<Catalog | null> {
    try {
      return await this.service.deleteCatalog({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          description: true,
          catalogId: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/serviceItems")
  @ApiNestedQuery(ServiceItemFindManyArgs)
  async findServiceItems(
    @common.Req() request: Request,
    @common.Param() params: CatalogWhereUniqueInput
  ): Promise<ServiceItem[]> {
    const query = plainToClass(ServiceItemFindManyArgs, request.query);
    const results = await this.service.findServiceItems(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        itemId: true,
        name: true,
        description: true,
        price: true,

        catalog: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/serviceItems")
  async connectServiceItems(
    @common.Param() params: CatalogWhereUniqueInput,
    @common.Body() body: ServiceItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      serviceItems: {
        connect: body,
      },
    };
    await this.service.updateCatalog({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/serviceItems")
  async updateServiceItems(
    @common.Param() params: CatalogWhereUniqueInput,
    @common.Body() body: ServiceItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      serviceItems: {
        set: body,
      },
    };
    await this.service.updateCatalog({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/serviceItems")
  async disconnectServiceItems(
    @common.Param() params: CatalogWhereUniqueInput,
    @common.Body() body: ServiceItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      serviceItems: {
        disconnect: body,
      },
    };
    await this.service.updateCatalog({
      where: params,
      data,
      select: { id: true },
    });
  }
}
