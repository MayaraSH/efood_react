import {
  FooterContainer,
  Logo,
  SocialMedia,
  SocialIcon,
  Copyright
} from './styles'

const Footer = () => {
  return (
    <FooterContainer>
      <Logo>
        <img src="/images/logo.svg" alt="logotipo Efood" />
      </Logo>
      <SocialMedia>
        <SocialIcon href="#" aria-label="Instagram">
          <img src="/images/instagram.svg" alt="logotipo Instagram" />
        </SocialIcon>
        <SocialIcon href="#" aria-label="Facebook">
          <img src="/images/facebook.svg" alt="logotipo Facebook" />
        </SocialIcon>
        <SocialIcon href="#" aria-label="Twitter">
          <img src="/images/twitter.svg" alt="logotipo Twitter" />
        </SocialIcon>
      </SocialMedia>
      <Copyright>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Copyright>
    </FooterContainer>
  )
}

export default Footer
