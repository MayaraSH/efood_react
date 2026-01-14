import { Restaurant } from '../types'

const API_URL = 'https://api-ebac.vercel.app/api/efood/restaurantes'
const CHECKOUT_URL = 'https://api-ebac.vercel.app/api/efood/checkout'

export const getRestaurants = async (): Promise<Restaurant[]> => {
  try {
    const response = await fetch(API_URL)
    if (!response.ok) {
      throw new Error('Erro ao buscar restaurantes')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Erro na API:', error)
    throw error
  }
}

export const getRestaurantById = async (id: string): Promise<Restaurant> => {
  try {
    const response = await fetch(`${API_URL}/${id}`)
    if (!response.ok) {
      throw new Error('Erro ao buscar restaurante')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Erro na API:', error)
    throw error
  }
}

export interface CheckoutPayload {
  products: Array<{
    id: number
    price: number
  }>
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

export interface CheckoutResponse {
  orderId: string
}

export const checkout = async (
  payload: CheckoutPayload
): Promise<CheckoutResponse> => {
  try {
    const response = await fetch(CHECKOUT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    if (!response.ok) {
      throw new Error('Erro ao processar pedido')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Erro no checkout:', error)
    throw error
  }
}
