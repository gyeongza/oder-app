import { css } from '@emotion/react';
import HeaderLogo from '../../assets/HeaderLogo';
import { colors } from '../../styles/colorPalette';
import Flex from './Flex';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Flex as="header" align="center" css={headerContainer}>
      <Link to="/" css={logoContainer}>
        <HeaderLogo />
      </Link>
    </Flex>
  );
}

const headerContainer = css`
  max-width: 600px;
  height: 57px;
  margin: 0 auto;
  background-color: ${colors.black};
  z-index: 10;
  box-shadow: 0 5px 5px 0 ${colors.grey};
`;

const logoContainer = css`
  padding: 12px;
  cursor: pointer;
`;

export default Header;
