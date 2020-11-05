import React, {ComponentProps} from 'react'
import {Story, Meta} from '@storybook/react/types-6-0'
import {
  CSSGridContainer,
  libName,
  disableStyledProps,
  colorsName,
} from '@utils/story'
import {Switch} from './index'

type PropsType = ComponentProps<typeof Switch>

export default {
  title: `${libName}/Switch`,
  component: Switch,
  argTypes: {
    ...disableStyledProps,
    checked: {
      control: 'boolean',
    },
  },
} as Meta

const Template: Story<PropsType> = args => <Switch {...args} />
Template.args = {
  id: 'foo',
}

export const All: Story<PropsType> = ({id, ...args}) => (
  <CSSGridContainer gap='10px' columns='repeat(1,108px)'>
    {colorsName
      .filter(key => key !== 'inactive' && key !== 'surface')
      .map((colorName, index) =>
        index === 0 ? (
          <Switch
            colorName={colorName}
            id={String(index + id)}
            key={index}
            {...args}
          />
        ) : (
          <Switch
            {...args}
            colorName={colorName}
            id={String(index + id)}
            key={index}
          />
        )
      )}
  </CSSGridContainer>
)
All.args = {
  ...Template.args,
  colorName: 'carbon',
}
