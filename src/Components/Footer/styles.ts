import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${colors.lightCream};
  padding: 40px 0;
  text-align: center;
`

export const Logo = styled.div`
  margin-bottom: 32px;
  margin-top: 40px;

  img {
    width: 125px;
  }
`

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 80px;
`

export const SocialIcon = styled.a`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`

export const Copyright = styled.p`
  font-size: 10px;
  font-weight: 400;
  color: ${colors.coral};
  max-width: 480px;
  margin: 0 auto;
`
