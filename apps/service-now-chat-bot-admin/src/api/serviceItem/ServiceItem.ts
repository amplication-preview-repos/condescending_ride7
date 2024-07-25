import { Catalog } from "../catalog/Catalog";

export type ServiceItem = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  itemId: string | null;
  name: string | null;
  description: string | null;
  price: number | null;
  catalog?: Catalog | null;
};
