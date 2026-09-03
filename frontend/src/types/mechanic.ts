export type Mechanic = {
  id: number;
  name: string;
  rating: number;
  distance: string;
  location: string;
  services: string[];
  servicePricing: Record<string, string>;
  isOpen: boolean;
  workingHours: string;
  address: string;
  phoneNumber: string;
};

export type ServiceRequestPayload = {
  customerName: string;
  phoneNumber: string;
  vehicleNumber: string;
  selectedService: string;
  problemDescription: string;
  mechanicId: number;
};

export type ServiceRequestResponse = ServiceRequestPayload & {
  requestId: number;
  mechanicName: string;
  status: string;
  createdAt: string;
  message: string;
};
