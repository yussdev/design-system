import React from 'react'
import {breakpoints} from './index'
export * from './index'
export const libName = 'Design System'

export const disableStyledProps = {
  ref: {table: {disable: true}},
  forwardedAs: {table: {disable: true}},
  as: {table: {disable: true}},
  theme: {table: {disable: true}},
  dir: {
    control: {
      type: 'select',
      options: ['rtl', 'ltr'],
    },
  },
}
export const breakpointsArgsType = Object.keys(breakpoints).reduce(
  (acc, val) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore;
    acc[val] = {
      control: {
        type: 'select',
        options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, true],
      },
    }
    return acc
  },
  {}
)
interface CSSGridContainerProps {
  gap?: string
  columns?: string
  rows?: string
  height?: string
  width?: string
  style?: React.CSSProperties
}
export const CSSGridContainer: React.FC<
  CSSGridContainerProps & React.HTMLAttributes<HTMLDivElement>
> = ({style, gap, columns, rows, children, width, height, ...props}) => (
  <div
    style={{
      display: 'grid',
      gap: gap,
      gridTemplateColumns: columns,
      gridTemplateRows: rows,
      width,
      height,
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
)
