import { api } from './client';
import { Mechanic, ServiceRequestPayload, ServiceRequestResponse } from '../types/mechanic';

export async function fetchMechanics(): Promise<Mechanic[]> {
  const response = await api.get<Mechanic[]>('/mechanics');
  return response.data;
}

export async function fetchMechanic(id: number): Promise<Mechanic> {
  const response = await api.get<Mechanic>(`/mechanics/${id}`);
  return response.data;
}

export async function createServiceRequest(
  payload: ServiceRequestPayload,
): Promise<ServiceRequestResponse> {
  const response = await api.post<ServiceRequestResponse>('/requests', payload);
  return response.data;
}
