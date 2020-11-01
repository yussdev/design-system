import React from 'react'
import {addDecorator} from '@storybook/react'
import {withContexts} from '@storybook/addon-contexts/react'
import {contexts} from './contexts'
import GlobalStyles from '../src/utils/Global'

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
}

const withGlobalStyles = Story => (
  <React.Fragment>
    <GlobalStyles />
    <Story />
  </React.Fragment>
)
addDecorator(withGlobalStyles)
addDecorator(withContexts(contexts))
