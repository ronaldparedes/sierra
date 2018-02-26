import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CtaArrow from '../CtaArrow';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start ;
  align-items: flex-start;
  margin-right: 20px;
  margin-bottom: 20px;
  color: #212C43;
  background: #FFF;
  font-family: "PT Sans";
  font-weight: 400;
  h2{
    margin: 0;
    font-size: 3.15rem;
    font-weight: inherit;
  }
  p{
    margin: 0 0 20px 0;
    color: #999fad;
    font-size: 1.4rem;
  }
`;

const InfoCard = (props) => (
  <StyledCard>
    <h2>{props.title}</h2>
    <p>{props.content}</p>
    <Link to={props.link}>
      <CtaArrow 
        width='26'
        height='26'
        normalFill='#7CCBFC' 
        hoverFill='#000'
      />
    </Link>
  </StyledCard>
);

export default InfoCard;
