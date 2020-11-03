import {ThemeProvider} from 'styled-components'
import {defaultTheme, darkTheme} from '../src/utils/theme'

export const contexts = [
  {
    icon: 'paintbrush',
    title: 'Themes',
    components: [ThemeProvider],
    params: [
      {
        name: 'Default Theme',
        props: {theme: defaultTheme},
        default: true,
      },
      {name: 'Dark Theme', props: {theme: darkTheme}},
    ],
    options: {
      deep: true,
      disabled: false,
      cancelable: false,
    },
  },
]
