import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.white};
  border: 1px solid ${colors.coral};
  position: relative;
`

export const CardImage = styled.div`
  width: 100%;
  height: 217px;
  position: relative;
  overflow: hidden;
  padding-bottom: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Tag = styled.span`
  background-color: ${colors.coral};
  color: ${colors.white};
  padding: 4px 6px;
  font-size: 12px;
  font-weight: bold;
`

export const CardContent = styled.div`
  padding: 8px;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const RestaurantName = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.coral};
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: bold;
  color: ${colors.coral};

  img {
    width: 21px;
  }
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${colors.coral};
  margin-bottom: 16px;
`

export const Button = styled.button`
  background-color: ${colors.coral};
  color: ${colors.lightCream};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
`
