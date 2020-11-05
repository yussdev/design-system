import styled, {css, DefaultTheme} from 'styled-components'
import {up} from 'styled-breakpoints'
import {SpacingType, defaultTheme} from '@utils/index'

type AlignContent =
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
type AlignItems = 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'
type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse'
type Justify =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
type Wrap = 'nowrap' | 'wrap' | 'wrap-reverse'

type GridValues = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | boolean

export interface GridProps {
  container?: boolean
  item?: boolean
  justify?: Justify
  alignContent?: AlignContent
  alignItems?: AlignItems
  direction?: Direction
  gap?: SpacingType
  xs?: GridValues
  sm?: GridValues
  md?: GridValues
  lg?: GridValues
  xl?: GridValues
  zeroMinWidth?: boolean
  flexWrap?: Wrap
  theme?: DefaultTheme
}
const layout = ({
  container,
  item,
  flexWrap,
  gap,
  justify,
  alignContent,
  alignItems,
  direction,
  theme = defaultTheme,
}: GridProps) =>
  container &&
  css`
    width: calc(100% + ${theme.spacing[gap || 0]});
    margin: ${!item && `calc(-${theme.spacing[gap || 0]} / 2);`};
    display: ${container ? 'flex' : 'unset'};
    justify-content: ${justify};
    align-content: ${alignContent};
    align-items: ${alignItems};
    flex-wrap: ${flexWrap};
    flex-direction: ${direction};
    > * {
      padding: calc(${theme.spacing[gap || 0]} / 2);
    }
  `
const size = ({xs, sm, md, lg, xl, item, zeroMinWidth}: GridProps) => {
  const xsValue =
    typeof xs === 'number' ? `${(xs / 12) * 100}%` : xs === true && '1'
  const smValue =
    typeof sm === 'number' ? `${(sm / 12) * 100}%` : sm === true && '1'
  const mdValue =
    typeof md === 'number' ? `${(md / 12) * 100}%` : md === true && '1'
  const lgValue =
    typeof lg === 'number' ? `${(lg / 12) * 100}%` : lg === true && '1'
  const xlValue =
    typeof xl === 'number' ? `${(xl / 12) * 100}%` : xl === true && '1'
  return (
    item &&
    css`
      ${up('xs')} {
        flex-grow: ${xsValue};
        flex-basis: ${xsValue};
        max-width: ${xsValue};
        min-width: ${zeroMinWidth ? '0' : 'initial'};
      }
      ${up('sm')} {
        flex-grow: ${smValue};
        flex-basis: ${smValue};
        max-width: ${smValue};
        min-width: ${zeroMinWidth ? '0' : 'initial'};
      }
      ${up('md')} {
        flex-grow: ${mdValue};
        flex-basis: ${mdValue};
        max-width: ${mdValue};
        min-width: ${zeroMinWidth ? '0' : 'initial'};
      }
      ${up('lg')} {
        flex-grow: ${lgValue};
        flex-basis: ${lgValue};
        max-width: ${lgValue};
        min-width: ${zeroMinWidth ? '0' : 'initial'};
      }
      ${up('xl')} {
        flex-grow: ${xlValue};
        flex-basis: ${xlValue};
        max-width: ${xlValue};
        min-width: ${zeroMinWidth ? '0' : 'initial'};
      }
    `
  )
}

export const Grid = styled.div<GridProps>`
  box-sizing: border-box;
  ${layout}
  ${size}
`
Grid.defaultProps = {
  flexWrap: 'wrap',
}
