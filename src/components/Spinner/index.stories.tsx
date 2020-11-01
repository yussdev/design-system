import React from 'react'
import {Story, Meta} from '@storybook/react/types-6-0'
import {useTheme} from 'styled-components'
import {libName} from '@utils/index'
import {Spinner, SpinnerProps} from './index'

export default {
  title: `${libName}/Spinner`,
  component: Spinner,
  argTypes: {
    theme: {table: {disable: true}},
    color: {control: 'color'},
  },
} as Meta

const Template: Story<SpinnerProps> = args => <Spinner {...args} />
Template.args = {
  size: '13px',
}

export const Spinners: Story<SpinnerProps> = args => {
  const theme = useTheme()
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(1,108px)',
        gap: '5px',
        height: '150px',
      }}
    >
      <Template {...args} />
      <Template {...args} color={theme.accent2.main} />
      <Template {...args} color={theme.carbon.main} />
      <Template {...args} color={theme.alert.main} />
    </div>
  )
}
