import styled from 'styled-components'
import { colors } from '../../styles'

export const ListContainer = styled.div`
  max-width: 1024px;
  margin: 80px auto;
  padding: 0 20px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 80px 80px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`

export const Loading = styled.div`
  text-align: center;
  font-size: 18px;
  color: ${colors.coral};
  padding: 40px;
`

export const ErrorMessage = styled.div`
  text-align: center;
  font-size: 18px;
  color: ${colors.coral};
  padding: 40px;
  background-color: ${colors.lightCream};
  border-radius: 8px;
`
