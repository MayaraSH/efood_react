import { Restaurant } from '../types'

const API_URL = 'https://api-ebac.vercel.app/api/efood/restaurantes'

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
