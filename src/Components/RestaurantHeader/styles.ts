import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderContainer = styled.header`
  background-color: ${colors.lightCream};
  padding: 40px 0;
  background-image: url('/images/Vector.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
`

export const HeaderContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const RestaurantLink = styled.a`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.coral};
`

export const Logo = styled.div`
  img {
    width: 125px;
  }
`

export const CartInfo = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.coral};
`

export const Hero = styled.div`
  height: 280px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${colors.darkOverlay.replace('0.8', '0.5')};
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const HeroContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 25px;
  padding-bottom: 32px;
`

export const Category = styled.span`
  font-size: 32px;
  font-weight: 100;
  color: ${colors.white};
`

export const RestaurantName = styled.h2`
  font-size: 32px;
  font-weight: 900;
  color: ${colors.white};
`
