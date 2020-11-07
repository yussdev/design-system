import React from 'react'
import styled, {DefaultTheme, StyledComponentProps} from 'styled-components'
import {noop, ColorsName} from '@utils/index'
import {CheckboxIcon} from '@Icons/index'

interface CheckboxProps {
  id: string
  colorName?: ColorsName
  dir: 'rtl' | 'ltr'
}

const CheckboxInput = styled.input.attrs<CheckboxProps>({type: 'checkbox'})<
  CheckboxProps
>`
  display: none;
  + svg {
    path {
      fill: ${({theme}) => theme.surface.light};
      transition: all 0.4s ease;
    }
    rect {
      stroke: ${({theme}) => theme.carbon.alphaMedium};
      transition: all 0.4s ease;
    }
  }
  &:checked {
    + svg {
      path {
        fill: ${({theme, colorName = 'accent2'}) => theme[colorName].main};
      }
      rect {
        stroke: ${({theme, colorName = 'accent2'}) => theme[colorName].main};
      }
    }
  }
`

export const Checkbox: React.FC<StyledComponentProps<
  'input',
  DefaultTheme,
  CheckboxProps,
  never
>> = ({checked, onChange = noop, id, ...props}) => {
  const [isChecked, setIsChecked] = React.useState<boolean>(Boolean(checked))
  return (
    <React.Fragment>
      <label
        style={{
          display: 'inline-flex',
        }}
      >
        <CheckboxInput
          {...props}
          id={id}
          checked={isChecked}
          onChange={e => {
            setIsChecked(!isChecked)
            onChange(e)
          }}
        />
        <CheckboxIcon />
      </label>
    </React.Fragment>
  )
}

Checkbox.defaultProps = {
  colorName: 'accent2',
}
