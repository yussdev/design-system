import React, {ComponentProps} from 'react'
import {Story, Meta} from '@storybook/react/types-6-0'
import {disableStyledProps, libName} from '@utils/index'
import {Paper} from './index'

export default {
  title: `${libName}/Paper`,
  component: Paper,
  argTypes: {
    ...disableStyledProps,
  },
} as Meta

const Template: Story<ComponentProps<typeof Paper>> = args => (
  <Paper {...args} />
)

export const Basic = Template.bind({})
