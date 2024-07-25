export type ServiceRequest = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  requestId: string | null;
  description: string | null;
  created: Date | null;
  status?: "Option1" | null;
};
