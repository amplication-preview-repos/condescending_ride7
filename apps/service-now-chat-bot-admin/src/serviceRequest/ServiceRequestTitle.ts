import { ServiceRequest as TServiceRequest } from "../api/serviceRequest/ServiceRequest";

export const SERVICEREQUEST_TITLE_FIELD = "requestId";

export const ServiceRequestTitle = (record: TServiceRequest): string => {
  return record.requestId?.toString() || String(record.id);
};
