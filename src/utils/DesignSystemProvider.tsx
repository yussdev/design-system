import React from 'react'
import {DefaultTheme, ThemeProvider} from 'styled-components'
import {GlobalStyles} from './Global'

interface Props {
  theme: DefaultTheme
}
export const DesignSystemProvider: React.FC<Props> = ({theme, children}) => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  </React.Fragment>
)
