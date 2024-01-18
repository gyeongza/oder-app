import { css } from '@emotion/react';
import Flex from '../components/common/Flex';
import { colors } from '../styles/colorPalette';

interface LayoutProps {
  children: React.ReactNode;
  isHome?: boolean;
}

function Layout({ children, isHome = false }: LayoutProps) {
  return (
    <Flex
      direction="column"
      justify="center"
      css={layoutContainerStyles(isHome)}
    >
      {children}
    </Flex>
  );
}

const layoutContainerStyles = (isHome: boolean | undefined) => css`
  background-color: ${isHome ? colors.black : colors.white};
  max-width: 600px;
  height: 100%;
  margin: 0 auto;
`;

export default Layout;
