import styled from 'styled-components'
import { colors } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.darkOverlay};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const ModalContainer = styled.div`
  background-color: ${colors.coral};
  padding: 32px;
  max-width: 1024px;
  width: 90%;
  position: relative;
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  color: ${colors.white};
  font-size: 24px;
  cursor: pointer;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ProductImage = styled.div`
  width: 280px;
  height: 280px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`

export const ProductInfo = styled.div`
  flex: 1;
  color: ${colors.white};
`

export const ProductTitle = styled.h3`
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 16px;
`

export const ProductDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`

export const ProductServes = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
`

export const AddButton = styled.button`
  background-color: ${colors.lightCream};
  color: ${colors.coral};
  padding: 4px 7px;
  font-size: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
`
