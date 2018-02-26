import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, media} from '../../global/global';
import logo from '../../img/logo.png';
import NavBar from '../NavBar';

const StyledHeader = Wrapper.extend`
  display: flex;
  justify-content: flex-start;
  height: 80px;
  @media (${media.tablet}) {
    justify-content: space-between;
    height: 87px;
  }
  background-color: #223e92;
  color: #fff;
  font-size: 1.4rem;
  position: sticky;
  top:0;
  overflow: hidden;
  z-index: 10;
  img{
    width: 200px;
  }
  .logo{
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
  }
  h1{
    position: absolute;
    margin: 0;
    transform: translateX(-1000px);
  }
  h3{
    font-size: 1rem;
    font-weight: 400;
    line-height: 40px;
    margin: 0;
    @media (${media.tablet}) {
      font-size: 1.3rem;
    } 
`;

const Header = () => (
  <StyledHeader>
    <div className='logo'>
      <h1>SIERRASOFT</h1>
      <Link to='/'>
        <img src={logo} alt='Sierrasoft logo'/>
      </Link>
      <h3>Enterprise Software, System, and Network Solutions</h3>
    </div>
    <NavBar />
  </StyledHeader>
);

export default Header;