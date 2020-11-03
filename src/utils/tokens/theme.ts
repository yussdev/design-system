import {rem} from 'polished'
import * as colors from './colors'
import * as typography from './typography'
import * as breakpoints from './breakpoints'
import {DefaultTheme} from 'styled-components'

export const defaultTheme = {
  ...colors,
  ...typography,
  ...breakpoints,
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
export type ScalesType = keyof typeof typography['scales']
export type SpacingType = keyof DefaultTheme['spacing']
export type BordersType = keyof DefaultTheme['borders']
export type BreakpointsType = keyof DefaultTheme['breakpoints']

export const colorsName = Object.keys(colors) as Array<ColorsName>
