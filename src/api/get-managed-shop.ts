import { api } from '@/lib/axios'

export interface GetManagedShopResponse {
  id: string
  name: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export async function getManagedShop() {
  const response = await api.get<GetManagedShopResponse>('/managed-restaurant')

  return response.data
}