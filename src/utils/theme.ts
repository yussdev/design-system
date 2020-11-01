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

export type ThemeType = typeof defaultTheme
