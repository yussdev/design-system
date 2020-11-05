import React from 'react'
import styled, {DefaultTheme, keyframes} from 'styled-components'
import {defaultTheme, flexCenter} from '@utils/index'

export interface SpinnerProps {
  size: string
  color: string
}
const lds_ellipsis1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`
const lds_ellipsis3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`

const lds_ellipsis2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`
const StyledSpinner = styled.div`
  ${flexCenter}
  width: 72px;
  position: relative;
  height: 100%;
  margin: auto;
  div {
    position: absolute;
    border-radius: 50%;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  div:nth-child(1) {
    left: 8px;
    animation: ${lds_ellipsis1} 0.6s infinite;
  }
  div:nth-child(2) {
    left: 8px;
    animation: ${lds_ellipsis2} 0.6s infinite;
  }
  div:nth-child(3) {
    left: 32px;
    animation: ${lds_ellipsis2} 0.6s infinite;
  }
  div:nth-child(4) {
    left: 56px;
    animation: ${lds_ellipsis3} 0.6s infinite;
  }
`
const SpinnerDot = styled.div<SpinnerProps>`
  width: ${({size}) => size};
  height: ${({size}) => size};
  background-color: ${({color}) => color};
`
export const Spinner: React.FC<SpinnerProps & {theme?: DefaultTheme}> = ({
  ...props
}) => {
  return (
    <StyledSpinner>
      <SpinnerDot {...props} />
      <SpinnerDot {...props} />
      <SpinnerDot {...props} />
      <SpinnerDot {...props} />
    </StyledSpinner>
  )
}
Spinner.defaultProps = {
  size: '13px',
  color: defaultTheme.accent.main,
}
