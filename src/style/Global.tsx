import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: inherit;
  }
  @font-face {
    font-family: "Mitr";
    src: url(/fonts/mitr/MitrRegular400.ttf);
  }  
  @font-face {
    font-family: "Futura_Bold";
    src: url(/fonts/mitr/Futura Bold font.ttf);
  } 
  body {
    background-color: ${({ theme }) => theme.colors.background};
    font-family: Mitr;

    img {
      height: auto;
      max-width: 100%;
    }
  }
  #dashboard-buy-tickets{
    @media (max-width: 767px){
      margin-top: 20px;
    }
  }
`

export default GlobalStyle
