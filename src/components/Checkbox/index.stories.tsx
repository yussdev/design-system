import React, {ComponentProps} from 'react'
import {Story, Meta} from '@storybook/react/types-6-0'
import {
  CSSGridContainer,
  libName,
  disableStyledProps,
  colorsName,
} from '@utils/story'
import {Checkbox} from './index'

type PropsType = ComponentProps<typeof Checkbox>

export default {
  title: `${libName}/Checkbox`,
  component: Checkbox,
  argTypes: {
    ...disableStyledProps,
    checked: {
      control: 'boolean',
    },
  },
} as Meta

const Template: Story<PropsType> = args => <Checkbox {...args} />
Template.args = {
  checked: true,
}

export const All: Story<PropsType> = ({id, ...args}) => (
  <CSSGridContainer gap='10px' columns='repeat(1,108px)'>
    {colorsName
      .filter(key => key !== 'inactive' && key !== 'surface')
      .map((colorName, index) =>
        index === 0 ? (
          <Checkbox
            colorName={colorName}
            id={String(index + id)}
            key={index}
            {...args}
          />
        ) : (
          <Checkbox
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
