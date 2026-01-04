import styled from 'styled-components'
import { colors } from '../../styles'

export const CheckoutContainer = styled.div<{ isOpen: boolean }>`
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

export const CheckoutOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.darkOverlay};
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  z-index: 999;
`

export const CheckoutTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.lightCream};
  margin-bottom: 16px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
  color: ${colors.lightCream};
  margin-bottom: 8px;
`

export const Input = styled.input`
  padding: 8px;
  font-size: 14px;
  border: none;
  background-color: ${colors.lightCream};
  color: ${colors.text};
  max-width: 100%;
  width: 100%;

  &::placeholder {
    color: ${colors.text};
  }
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 34px;
`

export const SubmitButton = styled.button`
  width: 100%;
  background-color: ${colors.lightCream};
  color: ${colors.coral};
  padding: 4px;
  font-size: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  margin-top: 24px;
`

export const BackButton = styled.button`
  width: 100%;
  background-color: ${colors.lightCream};
  color: ${colors.coral};
  padding: 4px;
  font-size: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  margin-top: 8px;
`
