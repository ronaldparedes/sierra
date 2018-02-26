import styled from 'styled-components';

export const media = {
  phone : 'max-width: 600px',
  tablet : 'min-width: 700px',
  desktop: 'min-width: 980px'
};

export const Wrapper = styled.div`
  padding: 0 20px;
  @media (${media.tablet}) {
    padding: 0 30px;
  }
  @media (${media.desktop}) {
    padding: 0 50px;
  }
`;

const StyledGlobal = Wrapper.extend`
  min-height: 50vh;
  padding-bottom: 150px;
`;

export default StyledGlobal;