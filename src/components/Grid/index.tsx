import styled, {css, DefaultTheme} from 'styled-components'
import {up} from 'styled-breakpoints'
import {SpacingType} from '@utils/index'

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

type GridValues = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | boolean

export interface GridProps {
  container?: boolean
  item?: boolean
  justify?: Justify
  alignContent?: AlignContent
  alignItems?: AlignItems
  direction?: Direction
  theme: DefaultTheme
  spacing?: SpacingType
  xs?: GridValues
  sm?: GridValues
  md?: GridValues
  lg?: GridValues
  xl?: GridValues
}
const layout = ({
  container,
  spacing,
  justify,
  alignContent,
  alignItems,
  direction,
  theme,
}: GridProps) =>
  container &&
  css`
    width: calc(100% + ${theme.spacing[spacing || 0]});
    margin: calc(-${theme.spacing[spacing || 0]} / 2);
    display: ${container ? 'flex' : 'unset'};
    justify-content: ${justify};
    align-content: ${alignContent};
    align-items: ${alignItems};
    flex-wrap: wrap;
    flex-direction: ${direction};
    > * {
      padding: calc(${theme.spacing[spacing || 0]} / 2);
    }
  `
const size = ({xs, sm, md, lg, xl, item}: GridProps) => {
  const xsValue = typeof xs === 'number' ? `${(xs / 12) * 100}%` : xs && '1'
  const smValue = typeof sm === 'number' ? `${(sm / 12) * 100}%` : sm && '1'
  const mdValue = typeof md === 'number' ? `${(md / 12) * 100}%` : md && '1'
  const lgValue = typeof lg === 'number' ? `${(lg / 12) * 100}%` : lg && '1'
  const xlValue = typeof xl === 'number' ? `${(xl / 12) * 100}%` : xl && '1'
  return (
    item &&
    css`
      ${up('xs')} {
        flex-grow: ${xsValue};
        max-width: ${xsValue};
        flex-basis: ${xsValue};
      }
      ${up('sm')} {
        flex-grow: ${smValue};
        max-width: ${smValue};
        flex-basis: ${smValue};
      }
      ${up('md')} {
        flex-grow: ${mdValue};
        max-width: ${mdValue};
        flex-basis: ${mdValue};
      }
      ${up('lg')} {
        flex-grow: ${lgValue};
        max-width: ${lgValue};
        flex-basis: ${lgValue};
      }
      ${up('xl')} {
        flex-grow: ${xlValue};
        max-width: ${xlValue};
        flex-basis: ${xlValue};
      }
    `
  )
}

export const Grid = styled.div<GridProps>`
  box-sizing: border-box;
  ${layout}
  ${size}
`
