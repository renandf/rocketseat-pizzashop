import { api } from '@/lib/axios'

export interface RegisterShopBody {
  restaurantName: string
  managerName: string
  email: string
  phone: number
}

export async function registerShop({
  restaurantName,
  managerName,
  email,
  phone,
}: RegisterShopBody) {
  await api.post('/restaurants', {
    restaurantName,
    managerName,
    email,
    phone,
  })
}