import React from 'react';
import StyledGlobal, { Wrapper } from '../global/global';
import scrollToTop from '../util/scrollToTop';
import HeroSection from '../components/HeroSection';
import ScrollUp from '../components/ScrollUp';
import banner from '../img/banner/how-it-works-photo_2.jpg';
import { Flex, Box } from 'grid-styled';

const HeroContent = Wrapper.extend`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  h2{
    line-height: 3rem;
    text-transform: uppercase;
    font-family: "Oswald", sans-serif;
    color: #FFF;
    font-size: 3rem;
    font-weight: 400;
    display: block;
  }
  small{
    line-height: 9rem;
    display: block;
    font-size: 9rem;
  }
`;

const StyledCareers = StyledGlobal.extend`
  color: #212C43;
  background-color: #FFF;
  .box-one{
    background-color: pink;
    height: 100%;
  }
  .box-two{
    background-color: cornflowerblue;
    height: 100%;
  }
`;

const Contact = () => {
  scrollToTop();
  return (
    <div>
      <HeroSection banner={banner} brightness={0.8}>
        <HeroContent>
          <h2>
            Join
            <small>Our Team</small>
          </h2>
        </HeroContent>
      </HeroSection>
      <StyledCareers>
        <h1>This is the Careers</h1>
        <Flex >
          <Box className='box-one' w={[1, 1/2]}>
            Half width
          </Box>
          <Box className='box-two' w={[1/2, 1/2]}>
            Half width
          </Box>
        </Flex>
      </StyledCareers>
      <ScrollUp />
    </div>
  )
};

export default Contact;
