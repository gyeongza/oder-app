import { css } from '@emotion/react';
import MainLogo from '../assets/MainLogo';
import { colors } from '../styles/colorPalette';
import Flex from '../components/common/Flex';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import Layout from '../layouts/Layout';

function Home() {
  const navigate = useNavigate();

  const goToOrderPage = () => {
    navigate('/order');
  };

  return (
    <Layout isHome={true}>
      <Flex
        direction="column"
        justify="center"
        align="center"
        css={homeContainerStyles}
      >
        <Flex direction="column" align="center" css={containerStyles}>
          <MainLogo />
          <OrderButton onClick={goToOrderPage}>주문하러 가기</OrderButton>
        </Flex>
      </Flex>
    </Layout>
  );
}

const homeContainerStyles = css`
  height: 100vh;
`;

const containerStyles = css`
  gap: 40px;
`;

const OrderButton = styled.button`
  width: 172px;
  height: 88px;
  color: ${colors.black};
  background-color: ${colors.white};
  border-radius: 20px;
  cursor: pointer;
`;

export default Home;
