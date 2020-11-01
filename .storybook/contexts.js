import {ThemeProvider} from 'styled-components'
import {defaultTheme} from '../src/utils/theme'

export const contexts = [
  {
    icon: 'box',
    title: 'Themes',
    components: [ThemeProvider],
    params: [
      {
        name: 'Default Theme',
        props: {theme: defaultTheme},
        default: true,
      },
      {name: 'Dark Theme', props: {theme: defaultTheme}},
    ],
    options: {
      deep: true,
      disabled: false,
      cancelable: false,
    },
  },
]
