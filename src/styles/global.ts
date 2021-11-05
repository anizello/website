import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Inter Regular'), local('Inter-Regular'),
        url('/fonts/inter-v3-latin-regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    src: local('Inter Extrabold'), local('Inter-Extrabold'),
        url('/fonts/inter-v3-latin-900.woff2') format('woff2');
  }

  ${({ theme }) => css`
    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    img,
    picture {
      max-width: 100%;
      display: block;
    }

    input,
    button,
    textarea,
    select {
      font: inherit;
    }

    #__next {
      isolation: isolate;
    }

    html {
      font-size: 62.5%;
    }

    html,
    body,
    #__next {
      height: 100%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.size2};
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
    }
  `}
`

export default GlobalStyles
