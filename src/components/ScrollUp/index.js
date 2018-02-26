import React from 'react';
import styled from 'styled-components';
import arrow from '../../img/arrow.svg';
import { animateScrollToTop } from '../../util/scrollToTop';
import { media } from '../../global/global';

const StyledScrollButton = styled.svg`
  background-image: url(${arrow});
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  bottom: 10px;
  right: 10px;
  @media (${media.tablet}) {
    bottom: 85px;
    right: 72px;
  }
  width: 50px;
  height: 50px;
  opacity: 0;
  z-index: 10;
  cursor: pointer;
  transition: opacity 0.4s ease-in-out;
  &:hover{
    background-color: rgba(124, 203, 252, 0.6);
  }
`;


class ScrollUp extends React.Component{
  handleScroll(){
    const scrlBtn = document.getElementById('scroll-button');
    if(window.scrollY >= 100){
      scrlBtn.style.opacity = 1;
      
    }else{
      scrlBtn.style.opacity = 0;
    }
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.handleScroll);
  }
  render(){
    return(
      <StyledScrollButton id='scroll-button'onClick={animateScrollToTop} />
    );
  }
};

export default ScrollUp;
