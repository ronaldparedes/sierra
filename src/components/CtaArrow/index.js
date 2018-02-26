import React from 'react';
import styled from 'styled-components';

const StyledArrow = styled.svg`
  path{
    fill: ${props => props.fill};
    transition: all 0.4s ease;
  }
  &:hover{
    path{
      fill: ${props => props.hoverFill};
    }
  }
`
const CtaArrow = ({width, normalFill, hoverFill}) => {
  return (
  <StyledArrow width={width} viewBox='0 0 26 26'fill={normalFill} hoverFill={hoverFill}>
    <path d="M13.5 7.2c-0.1-0.1-0.3-0.2-0.5-0.2s-0.4 0.1-0.5 0.2l-0.8 0.8c-0.2 0.2-0.2 0.3-0.2 0.5 0 0.2 
    0.1 0.4 0.2 0.5l2.6 2.6H7.7c-0.2 0-0.4 0.1-0.5 0.2 -0.1 0.1-0.2 0.3-0.2 0.5v1.1c0 0.2 0.1 0.4 0.2 0.5 0.1 0.1 0.3 
    0.2 0.5 0.2h6.6l-2.6 2.6c-0.2 0.1-0.2 0.3-0.2 0.5 0 0.2 0.1 0.4 0.2 0.5l0.8 0.8c0.2 0.2 0.3 0.2 0.5 0.2s0.4-0.1 
    0.5-0.2l5.2-5.2c0.2-0.1 0.2-0.3 0.2-0.5 0-0.2-0.1-0.4-0.2-0.5L13.5 7.2zM13 0C5.8 0 0 5.8 0 13c0 7.2 5.8 13 13 
    13s13-5.8 13-13S20.2 0 13 0zM13 23.4C7.3 23.4 2.6 18.7 2.6 13 2.6 7.3 7.3 2.6 13 2.6S23.4 7.3 23.4 13C23.4 18.7 18.7 
    23.4 13 23.4z"/>
  </StyledArrow>
)};

export default CtaArrow;
