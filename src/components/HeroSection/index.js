import React from 'react';
import styled from 'styled-components';
import grid from '../../img/call-to-action-pattern_2.png';

const GridOverlay = styled.div`
  background-image: url(${grid});
  background-repeat: repeat;
  background-size: 5px 5px;
  position: absolute;
  top: 0;bottom: 0;left: 0;right: 0;
`;

const Banner = styled.div`
  background-image: ${props => `url(${props.banner})`};
  height: 100%;
  background-repeat: no-repeat;
  background-position: center 31px;
  background-size: 1920px;
  filter: ${props => `brightness(${props.brightness || 1})`};
`;

const StyledSection = styled.section`
  transform: translateZ(-90px); /* To address Safari stacking issue */
  margin: 0;
  padding: 0;
  height: 389px;
  background: #6abffb;
  background: linear-gradient(to right, #6abffb 0%,#22639d 75%,#7db9e8 100%);
`;

const HeroSection = (props) => (
  <StyledSection>
    <Banner banner={props.banner} brightness={props.brightness} />
    <GridOverlay>
        {props.children}
    </GridOverlay>
  </StyledSection>
);
export default HeroSection;
