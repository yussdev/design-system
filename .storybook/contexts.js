import {ThemeProvider} from 'styled-components'
import {defaultTheme, darkTheme} from '../src/utils/tokens/theme'

export const contexts = [
  {
    icon: 'paintbrush',
    title: 'Themes',
    components: [ThemeProvider],
    params: [
      {
        name: 'Light',
        props: {theme: defaultTheme},
        default: true,
      },
      {name: 'Dark', props: {theme: darkTheme}, default: false},
    ],
    options: {
      deep: true,
      disabled: false,
      cancelable: false,
    },
  },
]
