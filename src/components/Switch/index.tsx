import React from 'react'
import styled, {DefaultTheme, StyledComponentProps} from 'styled-components'
import {rem} from 'polished'
import {noop, ColorsName} from '@utils/index'

interface SwitchProps {
  id: string
  colorName?: ColorsName
  dir: 'rtl' | 'ltr'
}

const SwitchInput = styled.input.attrs<SwitchProps>({type: 'checkbox'})<
  SwitchProps
>`
  display: none;
  &,
  &:after,
  &:before,
  & *,
  & *:after,
  & *:before,
  & + span {
    box-sizing: border-box;
    &::selection {
      background: none;
    }
  }

  + span {
    outline: 0;
    display: inline-block;
    width: ${rem(40)};
    height: ${rem(24)};
    position: relative;
    cursor: pointer;
    user-select: none;
    &:after,
    &:before {
      position: relative;
      display: block;
      content: '';
      width: ${rem(20)};
      height: ${rem(20)};
    }

    &:after {
      left: ${({dir}) => (dir === 'ltr' ? '0' : '45%')};
    }

    &:before {
      display: none;
    }
    background: ${({theme}) => theme.carbon.alphaLight};
    border-radius: ${rem(24)};
    padding: ${rem(2)};
    transition: all 0.4s ease;
    &:after {
      border-radius: 50%;
      background: #fff;
      transition: all 0.2s ease;
    }
  }

  &:checked {
    + span:after {
      left: ${({dir}) => (dir === 'ltr' ? '45%' : '0')};
    }
    + span {
      background: ${({theme, colorName = 'accent2'}) => theme[colorName].main};
    }
  }
`

export const Switch: React.FC<StyledComponentProps<
  'input',
  DefaultTheme,
  SwitchProps,
  never
>> = ({checked, onChange = noop, id, ...props}) => {
  const [isChecked, setIsChecked] = React.useState<boolean>(Boolean(checked))
  return (
    <label>
      <SwitchInput
        {...props}
        id={id}
        checked={isChecked}
        onChange={e => {
          setIsChecked(!isChecked)
          onChange(e)
        }}
      />
      <span />
    </label>
  )
}

Switch.defaultProps = {
  colorName: 'accent2',
}
