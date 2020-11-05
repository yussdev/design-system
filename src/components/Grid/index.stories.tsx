import React, {ComponentProps} from 'react'
import {Story, Meta} from '@storybook/react/types-6-0'
import {breakpointsArgsType, disableStyledProps, libName} from '@utils/story'
import {spacing} from '@utils/index'
import {Paper} from '@components/Paper'
import {Grid} from './index'

type PropsType = ComponentProps<typeof Grid>
export default {
  title: `${libName}/Grid`,
  component: Grid,
  argTypes: {
    ...disableStyledProps,
    ...breakpointsArgsType,
    spacing: {
      control: {
        type: 'select',
        options: Object.keys(spacing),
      },
    },
  },
} as Meta

export const BasicGrid: Story<PropsType> = ({...args}) => (
  <Grid {...args}>
    <Grid item xs={12}>
      <Paper>xs=12</Paper>
    </Grid>
    <Grid item xs={6}>
      <Paper>xs=6</Paper>
    </Grid>
    <Grid item xs={6}>
      <Paper>xs=6</Paper>
    </Grid>
    <Grid item xs={3}>
      <Paper>xs=3</Paper>
    </Grid>
    <Grid item xs={3}>
      <Paper>xs=3</Paper>
    </Grid>
    <Grid item xs={3}>
      <Paper>xs=3</Paper>
    </Grid>
    <Grid item xs={3}>
      <Paper>xs=3</Paper>
    </Grid>
  </Grid>
)

BasicGrid.args = {
  container: true,
  spacing: 3,
}

export const WithBreakpoints: Story<PropsType> = ({...args}) => (
  <Grid {...args}>
    <Grid item xs={12}>
      <Paper>xs=12</Paper>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Paper>xs=12 sm=6</Paper>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Paper>xs=12 sm=6</Paper>
    </Grid>
    <Grid item xs={6} sm={3}>
      <Paper>xs=6 sm=3</Paper>
    </Grid>
    <Grid item xs={6} sm={3}>
      <Paper>xs=6 sm=3</Paper>
    </Grid>
    <Grid item xs={6} sm={3}>
      <Paper>xs=6 sm=3</Paper>
    </Grid>
    <Grid item xs={6} sm={3}>
      <Paper>xs=6 sm=3</Paper>
    </Grid>
  </Grid>
)
WithBreakpoints.args = {
  ...BasicGrid.args,
}

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Paper>item</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper>item</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper>item</Paper>
      </Grid>
    </React.Fragment>
  )
}
export const NestedGrid: Story<PropsType> = ({...args}) => (
  <Grid {...args} container>
    <Grid {...args} container item>
      <FormRow />
    </Grid>
    <Grid {...args} container item>
      <FormRow />
    </Grid>
    <Grid {...args} container item>
      <FormRow />
    </Grid>
  </Grid>
)

NestedGrid.args = {
  spacing: 3,
}
