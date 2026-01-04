import { Link } from 'react-router-dom'
import {
  HeaderContainer,
  HeaderContent,
  RestaurantLink,
  Logo,
  CartInfo,
  Hero,
  HeroContent,
  Category,
  RestaurantName
} from './styles'

interface RestaurantHeaderProps {
  category: string
  name: string
  heroImage: string
  cartCount: number
  onCartClick: () => void
}

const RestaurantHeader = ({
  category,
  name,
  heroImage,
  cartCount,
  onCartClick
}: RestaurantHeaderProps) => {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <Link to="/">
            <RestaurantLink>Restaurantes</RestaurantLink>
          </Link>
          <Logo>
            <Link to="/">
              <img src="/images/logo.svg" alt="efood" />
            </Link>
          </Logo>
          <CartInfo onClick={onCartClick} style={{ cursor: 'pointer' }}>
            {cartCount} produto(s) no carrinho
          </CartInfo>
        </HeaderContent>
      </HeaderContainer>
      <Hero>
        <img src={heroImage} alt={name} />
        <HeroContent>
          <Category>{category}</Category>
          <RestaurantName>{name}</RestaurantName>
        </HeroContent>
      </Hero>
    </>
  )
}

export default RestaurantHeader
