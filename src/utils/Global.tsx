import {createGlobalStyle, DefaultTheme} from 'styled-components'
import {normalize} from 'polished'
import {libPrefix} from '@utils/index'

import fontSrc from '../assets/fonts/IRANSansMobile.ttf'
import fontSrcBold from '../assets/fonts/IRANSansMobile_Bold.ttf'

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
      src: url(${fontSrc});
    }
    @font-face {
      font-family: 'IRANSansMobile';
      font-style: normal;
      font-weight: normal;
      font-display: fallback;
      src: url(${fontSrcBold});
    }



    :root {
      font-family: ${({theme}) => theme.fonts.default};
      ${({theme}) => generateCSSVariablesFromTheme(theme)}
    }

`
