import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import RestaurantList from '../../Components/RestaurantList'
import { Container } from './styles'

const Home = () => {
  return (
    <Container>
      <Header />
      <RestaurantList />
      <Footer />
    </Container>
  )
}

export default Home
