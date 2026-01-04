import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderContainer = styled.header`
  background-image: url('/images/Vector.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 40px 0;
  text-align: center;
`

export const Logo = styled.div`
  img {
    width: 125px;
  }
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 900;
  color: ${colors.coral};
  margin-top: 138px;
`
