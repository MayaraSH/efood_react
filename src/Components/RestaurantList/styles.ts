import styled from 'styled-components'

export const ListContainer = styled.div`
  max-width: 1024px;
  margin: 80px auto;
  padding: 0 20px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px 80px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`
