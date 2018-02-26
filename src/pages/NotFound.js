import React from 'react';
import StyledGlobal from '../global/global';

const StyledNotFound = StyledGlobal.extend`
  color: red;
  background-color: blanchedalmond;
`;
const NotFound = () => {
  return (
  <StyledNotFound>
    <h1>PAGE NOT FOUND!</h1>
  </StyledNotFound>
  )};

export default NotFound;
