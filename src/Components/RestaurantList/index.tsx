import { useEffect, useState } from 'react'
import RestaurantCard from '../RestaurantCard'
import { ListContainer, Grid, Loading, ErrorMessage } from './styles'
import { getRestaurants } from '../../services/api'
import { Restaurant } from '../../types'

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setLoading(true)
        const data = await getRestaurants()
        setRestaurants(data)
      } catch (err) {
        setError('Erro ao carregar restaurantes. Tente novamente mais tarde.')
      } finally {
        setLoading(false)
      }
    }

    fetchRestaurants()
  }, [])

  if (loading) {
    return (
      <ListContainer>
        <Loading>Carregando restaurantes...</Loading>
      </ListContainer>
    )
  }

  if (error) {
    return (
      <ListContainer>
        <ErrorMessage>{error}</ErrorMessage>
      </ListContainer>
    )
  }

  return (
    <ListContainer>
      <Grid>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            id={restaurant.id}
            name={restaurant.titulo}
            rating={restaurant.avaliacao}
            description={restaurant.descricao}
            image={restaurant.capa}
            tags={[
              ...(restaurant.destacado ? ['Destaque da semana'] : []),
              restaurant.tipo
            ]}
          />
        ))}
      </Grid>
    </ListContainer>
  )
}

export default RestaurantList
