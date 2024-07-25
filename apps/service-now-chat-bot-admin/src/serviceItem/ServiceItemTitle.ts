import { ServiceItem as TServiceItem } from "../api/serviceItem/ServiceItem";

export const SERVICEITEM_TITLE_FIELD = "name";

export const ServiceItemTitle = (record: TServiceItem): string => {
  return record.name?.toString() || String(record.id);
};
