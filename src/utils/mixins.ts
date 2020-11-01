import {css} from 'styled-components'
import {ThemeType} from './theme'

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
  font-family: ${props => props.theme.fonts.default};
  font-size: ${props => props.theme.scales[scale]};
  font-weight: ${props => props.theme.weight[weight]};
  ${props => lh && `line-height: ${props.theme.lineHeight[lh]}`};
`

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`
