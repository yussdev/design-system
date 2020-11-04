import {createGlobalStyle, DefaultTheme} from 'styled-components'
import {normalize} from 'polished'
import {libPrefix} from '@utils/tokens/contants'

function generateCSSVariablesFromTheme(theme: DefaultTheme) {
  return Object.entries(theme)
    .map(([outerKey, value]) =>
      Object.entries(value)
        .map(
          ([innerKey, value]) =>
            `--${libPrefix}-${outerKey}-${innerKey}: ${value}`
        )
        .join(';')
    )
    .join(';')
}

export const GlobalStyles = createGlobalStyle`
    ${normalize()}
    @font-face {
      font-family: 'IRANSansMobile';
      font-style: normal;
      font-weight: normal;
      font-display: fallback;
      src: url('https://snappfood.ir/pwa/assets/fonts/IRANSansMobile.ttf');
    }
    @font-face {
      font-family: 'IRANSansMobile';
      font-style: normal;
      font-weight: normal;
      font-display: fallback;
      src: url('https://snappfood.ir/pwa/assets/fonts/IRANSansMobile_Bold.ttf');
    }



    :root {
      font-family: ${({theme}) => theme.fonts.default};
      ${({theme}) => generateCSSVariablesFromTheme(theme)}
    }

`
