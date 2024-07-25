import { ServiceItem } from "../serviceItem/ServiceItem";

export type Catalog = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  catalogId: string | null;
  serviceItems?: Array<ServiceItem>;
};
