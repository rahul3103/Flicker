import styled from 'styled-components';

import Dropdown from './Dropdown';
import Dropdown1 from './Dropdown1';

const HeaderContainer = styled.header`
  height: 72px;
  background: #fff;
  width: 100%;
  box-shadow: 0px 16px 32px #f0f4f7;
`;

const HeaderParent = styled.div`
  width: 1136px;
  grid-template-columns: repeat(24, 1fr);
  grid-column-gap: 16px;
  display: grid;
  margin: auto;
  height: 100%;
`;

const Header = () => (
  <HeaderContainer>
    <HeaderParent>
      <Dropdown />
      <Dropdown1 />
    </HeaderParent>
  </HeaderContainer>
);

export default Header;
