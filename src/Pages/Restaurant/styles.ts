import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${colors.cream};
`

export const ProductsContainer = styled.div`
  max-width: 1024px;
  margin: 56px auto 120px;
  padding: 0 20px;
`

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Loading = styled.div`
  text-align: center;
  font-size: 18px;
  color: ${colors.coral};
  padding: 100px 40px;
`
