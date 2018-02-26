import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CtaArrow from '../CtaArrow';

const StyledContatiner = styled.div`
  transform-style: preserve-3d;
  /* perspective: 900px;  // Does not work in Safari*/
  }
  &:hover > div:first-of-type{
    transform:  rotateX(-90deg);
    opacity: 0;
  }
  &:hover > div:last-of-type{
    transform:  rotateX(0deg);
    opacity: 1;
  }
`;
const StyledInfoFront = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 180px;
  width: 180px;
  border-radius: 50%;
  margin: 0 19px;
  background-color: rgba(232,232,221,0.5);
  box-shadow: 0 0 0 10px rgba(232,232,221,0.2), 0 0 0 3px #e8e8dd;
  font-family: 'Oswald', sans-serif;
  font-weight: normal;
  color: #162a43;
  text-shadow: 0 1px 0 #e8e8dd;
  text-align: center;
  user-select: none;
  transform-origin: 0 90px -90px;
  transition: all 0.4s ease-in-out;
  h4{
    font-size: 3rem;
    text-transform: uppercase;
    margin: 0px;
    line-height: 20px;
    font-weight: 400;
  }
`;
const StyledInfoBack = StyledInfoFront.extend`
  justify-content: space-around;
  opacity: 0;
  position: static;
  color: #FFF;
  text-shadow: 0 1px 0 #5fb9f0;
  background-color: #7ccbfc;
  box-shadow: 0 0 0 10px rgba(232,232,221,0.2), 0 0 0 3px #fff;
  transform: rotateX(90deg);
  h4{
    margin-top: 3rem;
  }
  p{
    font-family: 'PT Sans';
    font-size: 1.2rem;
    padding: 0 2rem;
  }
`;

const InfoCircle = (props) => (
  <StyledContatiner>
    <StyledInfoFront><h4> {props.children} </h4> </StyledInfoFront>
    <StyledInfoBack>
      <h4> {props.children} </h4> 
      <p> {props.paragraph} </p>
      <Link to={props.link}>
        <CtaArrow 
          width='20'
          normalFill='#FFF' 
          hoverFill='#000'
        />
      </Link>
    </StyledInfoBack>
  </StyledContatiner>
);

export default InfoCircle;