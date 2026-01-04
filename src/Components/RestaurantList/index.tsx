import RestaurantCard from '../RestaurantCard'
import { ListContainer, Grid } from './styles'

const restaurants = [
  {
    id: 1,
    name: 'Hioki Sushi',
    rating: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: '/images/restaurant1.png',
    tags: ['Destaque da semana', 'Japonesa']
  },
  {
    id: 2,
    name: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: '/images/restaurant2.png',
    tags: ['Italiana']
  },
  {
    id: 3,
    name: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: '/images/restaurant2.png',
    tags: ['Italiana']
  },
  {
    id: 4,
    name: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: '/images/restaurant2.png',
    tags: ['Italiana']
  },
  {
    id: 5,
    name: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: '/images/restaurant2.png',
    tags: ['Italiana']
  },
  {
    id: 6,
    name: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: '/images/restaurant2.png',
    tags: ['Italiana']
  }
]

const RestaurantList = () => {
  return (
    <ListContainer>
      <Grid>
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} {...restaurant} />
        ))}
      </Grid>
    </ListContainer>
  )
}

export default RestaurantList
