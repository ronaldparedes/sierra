import React from 'react';
import StyledGlobal, { Wrapper } from '../global/global';
import scrollToTop from '../util/scrollToTop';
import HeroSection from '../components/HeroSection';
import ScrollUp from '../components/ScrollUp';
import banner from '../img/banner/contact-banner.jpg';
const StyledContact = StyledGlobal.extend`
  color: #212C43;
  background-color: #FFF;
`;

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
const Contact = () => {
  scrollToTop();
  return (
    <div>
      <HeroSection banner={banner} brightness={0.8}>
        <HeroContent>
          <h2>
            Get in
            <small>Touch</small>
          </h2>
        </HeroContent>
      </HeroSection>
      <StyledContact>
        <h1>This is the Contact</h1>
      </StyledContact>
      <ScrollUp />
    </div>
  )
};

export default Contact;
