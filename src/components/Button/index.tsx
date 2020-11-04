import styled, {
  css,
  DefaultTheme,
  StyledComponentProps,
  useTheme,
} from 'styled-components'
import React from 'react'
import {rem} from 'polished'
import {Spinner} from '@components/Spinner'
import {fontStyles, ColorsName, flexCenter} from '@utils/index'

export interface ButtonProps {
  appearance?: 'solid' | 'outline' | 'ghost' | 'naked'
  colorName?: ColorsName
  size?: 'default' | 'large'
  theme: DefaultTheme
  disabled?: boolean
  isLoading?: boolean
  block?: boolean
  Icon?: React.FC
}

const size = ({size, block, colorName, theme}: ButtonProps) => css`
  min-width: 107px;
  width: ${block ? '100%' : ''};
  height: ${size === 'large' ? rem(48) : rem(40)};

  padding: ${size === 'large'
    ? `${rem(10)} ${rem(16)}`
    : `${rem(8)}  ${rem(16)}`};

  border: ${theme.borders.default} solid ${theme[colorName!].main};
  border-radius: ${theme.borders.radius};
`

const color = ({
  colorName,
  theme,
  disabled,
  isLoading,
  appearance,
}: ButtonProps) => {
  const mainColor = theme[colorName!].main
  const fg = {
    color: '',
    hover: '',
    pressed: '',
    focused: '',
    loading: '',
    inactive: theme.inactive.dark,
  }
  const bg = {
    color: mainColor as string,
    hover: '',
    pressed: '',
    focused: '',
    loading: '',
    inactive: theme.inactive.light,
  }
  const bd = {
    color: bg.color,
    hover: bg.color,
    pressed: bg.color,
    focused: bg.color,
    loading: '',
    inactive: theme.inactive.light,
  }

  switch (appearance) {
    case 'outline':
      fg.color = mainColor
      fg.hover = theme[colorName!].dark
      fg.focused = mainColor
      fg.pressed = fg.hover

      bg.color = theme.surface.light
      bg.focused = bg.color
      bg.loading = bg.color
      bg.hover = bg.color
      bg.pressed = theme[colorName!].alphaMedium

      bd.color = fg.color
      bd.hover = fg.hover
      bd.focused = theme[colorName!].alphaHigh
      bd.pressed = fg.pressed

      break
    case 'ghost':
      fg.color = mainColor
      fg.hover = theme[colorName!].dark
      fg.focused = mainColor
      fg.pressed = fg.hover

      bg.color = theme[colorName!].alphaLight
      bg.focused = bg.color
      bg.loading = bg.color
      bg.hover = theme[colorName!].alphaMedium
      bg.pressed = theme[colorName!].alphaHigh

      bd.color = bg.color
      bd.hover = bg.hover
      bd.focused = theme[colorName!].alphaHigh
      bd.pressed = bg.pressed

      break
    case 'naked':
      fg.color = mainColor
      fg.hover = theme[colorName!].dark
      fg.focused = mainColor
      fg.pressed = fg.hover

      bg.color = 'transparent'
      bg.focused = bg.color
      bg.loading = bg.color
      bg.hover = theme[colorName!].alphaLight
      bg.pressed = theme[colorName!].alphaMedium

      bd.color = bg.color
      bd.hover = bg.hover
      bd.focused = theme[colorName!].alphaHigh
      bd.pressed = bg.pressed
      break
    case 'solid':
      fg.color = theme[colorName!].overlay
      fg.hover = fg.color
      fg.focused = fg.color
      fg.pressed = fg.color

      bg.color = mainColor
      bg.focused = bg.color
      bg.loading = bg.color
      bg.hover = theme[colorName!].light
      bg.pressed = theme[colorName!].dark

      bd.color = bg.color
      bd.hover = bg.hover
      bd.focused = theme[colorName!].alphaHigh
      bd.pressed = bg.pressed
      break
  }
  const getStateStyles = (state: keyof typeof fg) => css`
    color: ${fg[state]};
    background-color: ${bg[state]};
    border-color: ${bd[state]};
  `
  return css`
    color: ${!disabled ? fg.color : fg.inactive};
    background-color: ${isLoading
      ? bg.loading
      : !disabled
      ? bg.color
      : bg.inactive};
    border-color: ${!disabled ? bd.color : bd.inactive};
    background-clip: padding-box;
    &:hover {
      ${getStateStyles('hover')}
    }
    &:focus {
      outline: none;
      ${getStateStyles('focused')}
    }
    &:active {
      ${getStateStyles('pressed')}
    }
    &:disabled {
      ${getStateStyles('inactive')}
    }
  `
}
const StyledButton = styled.button<ButtonProps>`
  ${flexCenter}
  cursor: pointer;
  transition: all 150ms ease-out 0s;
  box-sizing: border-box;
  ${size}
  ${color}
  ${({size}) => fontStyles({scale: size!, weight: 'regular'})};

  span:not(:only-child) {
    &:first-child {
      ${({dir}) =>
        dir === 'rtl' ? `margin-left: ${rem(8)}` : `margin-right: ${rem(8)}`}
    }
    &:last-child {
      ${({dir}) =>
        dir === 'rtl' ? `margin-right: ${rem(8)}` : `margin-left: ${rem(8)}`}
    }
  }
`

export const Button = React.forwardRef<
  HTMLButtonElement,
  Partial<StyledComponentProps<'button', DefaultTheme, ButtonProps, never>>
>((props, ref) => {
  const theme = useTheme()
  const {Icon, isLoading, disabled, children, colorName, appearance} = props

  const getLoadingColor = () => {
    switch (appearance) {
      case 'ghost':
        return theme[colorName!].main
      case 'naked':
        return theme[colorName!].main
      case 'outline':
        return theme[colorName!].main
      case 'solid':
        return theme[colorName!].overlay
    }
  }
  return (
    <React.Fragment>
      <StyledButton {...props} ref={ref}>
        {Icon && <Icon />}
        {isLoading && !disabled ? (
          <Spinner size='13px' color={getLoadingColor()!} />
        ) : (
          <span>{children}</span>
        )}
      </StyledButton>
    </React.Fragment>
  )
})
Button.displayName = 'Button'
Button.defaultProps = {
  appearance: 'solid',
  isLoading: false,
  size: 'default',
  colorName: 'accent',
}

export const appearances: Array<ButtonProps['appearance']> = [
  'solid',
  'ghost',
  'outline',
  'naked',
]
