import {rem} from 'polished'
import * as colors from './colors'
import * as typography from './typography'

export const defaultTheme = {
  ...colors,
  ...typography,
  borders: {
    default: rem(1.5),
    focused: rem(3),
    radius: rem(6),
  },
}
export const darkTheme = {
  ...defaultTheme,
  ['accent']: defaultTheme['carbon'],
  ['carbon']: defaultTheme['accent'],
}
export type ThemeType = typeof defaultTheme
export type ColorsName = keyof typeof colors

export const colorsName = Object.keys(colors) as Array<ColorsName>
