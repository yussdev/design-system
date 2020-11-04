import React from 'react'
import {addDecorator} from '@storybook/react'
import {withContexts} from '@storybook/addon-contexts/react'
import {GlobalStyles} from '../src/utils'
import {contexts} from './contexts'

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
