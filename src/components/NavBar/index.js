import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { media } from '../../global/global';

const StyledNavBar = styled.div`
  /* display: ${props => props.isVisible ? 'block' : 'none'} ;  */
  display: none;
  @media (${media.tablet}) {
    display: block;
  }
  ul{
    height: 100%;
    padding: 0;
    margin: 0;
  }
  li{
    display: inline-block;
    height: inherit;
  }
  .anchorContainer{
    display: flex;
    height: inherit;
    position: relative;
    padding: 0 10px;
    @media(${media.desktop}){
      padding: 0 15px;
    }
    align-items: center;
  }
  .anchorContainer::after{
    content: '';
    position: absolute;
    opacity: 0;
    bottom: 25%; left: 0;
    width: 100%;
    height: 3px;
    background-color: #7ccbfc;
    transition: opacity 50ms ease, transform 150ms ease;
  }
  a{
    height:inherit;
    color: inherit;
    display: block;
    text-decoration: none;
    &:hover{
    background-color: rgba(124,203,252,.1);
    }
    &:hover .anchorContainer::after{
      transform: translateY(22px);
      opacity: 1;        
    }
  }
`;

const NavBar = () => (
  <StyledNavBar>
    <ul>
      <li><NavLink exact to='/'><div className='anchorContainer'>About</div></NavLink></li>
      <li><NavLink to='/portfolio'><div className='anchorContainer'>Portfolio</div></NavLink></li>
      <li><NavLink to='/services'><div className='anchorContainer'>Services</div></NavLink></li>
      <li><NavLink to='/careers'><div className='anchorContainer'>Careers</div></NavLink></li>
      <li><NavLink to='/contact'><div className='anchorContainer'>Contact</div></NavLink></li>
    </ul>
  </StyledNavBar>
);

export default NavBar;