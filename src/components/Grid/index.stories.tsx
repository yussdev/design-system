import React, {ComponentProps} from 'react'
import {Story, Meta} from '@storybook/react/types-6-0'
import {breakpoints, disableStyledProps, libName, spacing} from '@utils/index'
import {Paper} from '@components/Paper'
import {Grid} from './index'

type PropsType = ComponentProps<typeof Grid>
export default {
  title: `${libName}/Grid System`,
  component: Grid,
  argTypes: {
    ...disableStyledProps,
    ...Object.keys(breakpoints).reduce((acc, val) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore;
      acc[val] = {
        control: {
          type: 'select',
          options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, true],
        },
      }
      return acc
    }, {}),
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
