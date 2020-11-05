import React, {ComponentProps} from 'react'
import {Story, Meta} from '@storybook/react/types-6-0'
import {
  CSSGridContainer,
  colorsName,
  disableStyledProps,
  libName,
} from '@utils/story'
import {CircleCheck, CircleMinus, CirclePlus} from '@Icons/index'
import {Button, appearances} from './index'

type PropsType = ComponentProps<typeof Button> & {icon: string}
const iconMap = {CircleCheck, CircleMinus, CirclePlus}

export default {
  title: `${libName}/Buttons`,
  component: Button,
  argTypes: {
    ...disableStyledProps,
    Icon: {table: {disable: true}},
    icon: {
      control: {
        type: 'select',
        options: Object.keys(iconMap),
      },
    },
  },
} as Meta

const Template: Story<PropsType> = args => (
  <Button {...args} Icon={iconMap[args.icon as keyof typeof iconMap]}>
    برچسب
  </Button>
)

export const All: Story<PropsType> = args => (
  <CSSGridContainer gap='10px' columns='repeat(4,108px)'>
    {appearances.map(appearance =>
      colorsName
        .filter(key => key !== 'inactive' && key !== 'surface')
        .map(color => (
          <React.Fragment key={color as string}>
            <Solid
              {...Solid.args}
              {...args}
              colorName={color}
              appearance={appearance}
              Icon={undefined}
            />
          </React.Fragment>
        ))
    )}
  </CSSGridContainer>
)
All.argTypes = {
  icon: {table: {disable: true}},
}
export const Solid = Template.bind({})
Solid.args = {
  appearance: 'solid',
}

export const Outline = Template.bind({})
Outline.args = {
  appearance: 'outline',
}

export const Ghost = Template.bind({})
Ghost.args = {
  appearance: 'ghost',
}

export const Naked = Template.bind({})
Naked.args = {
  appearance: 'naked',
}

export const WithIcons: Story<PropsType> = args => (
  <CSSGridContainer gap='10px' columns='repeat(4,108px)'>
    {appearances.map(appearance =>
      colorsName
        .filter(key => key !== 'inactive' && key !== 'surface')
        .map(color => (
          <React.Fragment key={color as string}>
            <Solid
              {...Solid.args}
              {...args}
              colorName={color}
              appearance={appearance}
            />
          </React.Fragment>
        ))
    )}
  </CSSGridContainer>
)
WithIcons.args = {
  icon: 'CircleCheck',
}
