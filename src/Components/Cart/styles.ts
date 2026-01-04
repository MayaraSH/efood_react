import styled from 'styled-components'
import { colors } from '../../styles'

export const CartOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.darkOverlay};
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  z-index: 999;
`

export const CartContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-360px')};
  width: 360px;
  height: 100%;
  background-color: ${colors.coral};
  padding: 32px 8px;
  transition: right 0.3s ease;
  z-index: 1000;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 100%;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  }
`

export const CartItem = styled.div`
  background-color: ${colors.lightCream};
  padding: 8px;
  margin-bottom: 16px;
  position: relative;
  display: flex;
  gap: 8px;
`

export const CartItemImage = styled.div`
  width: 80px;
  height: 80px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const CartItemInfo = styled.div`
  flex: 1;
`

export const CartItemName = styled.h4`
  font-size: 18px;
  font-weight: 900;
  color: ${colors.coral};
  margin-bottom: 16px;
`

export const CartItemPrice = styled.p`
  font-size: 14px;
  color: ${colors.coral};
`

export const RemoveButton = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
  width: 16px;
  height: 16px;
  padding: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

export const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.lightCream};
  font-size: 14px;
  font-weight: 700;
  margin: 40px 0 16px;
`

export const CartButton = styled.button`
  width: 100%;
  background-color: ${colors.lightCream};
  color: ${colors.coral};
  padding: 4px;
  font-size: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  margin-bottom: 8px;
`
