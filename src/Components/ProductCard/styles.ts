import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.coral};
  padding: 8px;
`

export const ProductImage = styled.div`
  width: 100%;
  height: 167px;
  margin-bottom: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const ProductName = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.lightCream};
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${colors.lightCream};
  margin-bottom: 8px;
`

export const Button = styled.button`
  width: 100%;
  background-color: ${colors.lightCream};
  color: ${colors.coral};
  padding: 4px;
  font-size: 14px;
  font-weight: 700;
`
