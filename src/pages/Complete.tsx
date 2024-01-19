import { css } from '@emotion/react';
import Flex from '../components/common/Flex';
import Layout from '../layouts/Layout';
import Text from '../components/common/Text';
import CompleteIcon from '../assets/CompleteIcon';
import useCountdown from '../hooks/useTimer';

function Complete() {
  const countdown = useCountdown(3, '/order');

  return (
    <Layout>
      <Flex
        direction="column"
        justify="center"
        align="center"
        css={homeContainerStyles}
      >
        <Flex direction="column" align="center" css={containerStyles}>
          <CompleteIcon />
          <Text>주문이 완료되었습니다.</Text>
          <Text>{countdown}초 후 주문하기 페이지로 이동합니다.</Text>
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

export default Complete;
