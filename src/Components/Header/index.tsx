import { HeaderContainer, Logo, Title } from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <img src="/images/logo.svg" alt="efood" />
      </Logo>
      <Title>
        Viva experiências gastronômicas
        <br />
        no conforto da sua casa
      </Title>
    </HeaderContainer>
  )
}

export default Header
