import { createGlobalStyle } from 'styled-components'

export const colors = {
  coral: '#E66767',
  lightCream: '#FFEBD9',
  cream: '#FFF8F2',
  white: '#FFFFFF',
  darkOverlay: 'rgba(0, 0, 0, 0.8)',
  text: '#4B4B4B'
}

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: ${colors.text};
    background-color: ${colors.cream};
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }
`
