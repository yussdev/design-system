import {css} from 'styled-components'
import {defaultTheme, ThemeType} from './theme'

/**
 * Mixins function base type
 */
type MixinFn<P> = {
  (options: P): ReturnType<typeof css>
}

interface FontStylesOptions {
  scale: keyof ThemeType['scales']
  weight: keyof ThemeType['weight']
  lh?: keyof ThemeType['lineHeight']
}

export const fontStyles: MixinFn<FontStylesOptions> = ({
  scale = 'default',
  weight = 'regular',
  lh,
}) => css`
  font-family: ${({theme = defaultTheme}) => theme.fonts.default};
  font-size: ${({theme = defaultTheme}) => theme.scales[scale]};
  font-weight: ${({theme = defaultTheme}) => theme.weight[weight]};
  ${({theme = defaultTheme}) => lh && `line-height: ${theme.lineHeight[lh]}`};
`

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`
