import { css } from '@emotion/react';
import Flex from '../components/common/Flex';
import Layout from '../layouts/Layout';
import Text from '../components/common/Text';
import useCountdown from '../hooks/useTimer';
import Spacing from '../components/common/Spacing';

function Error() {
  const countdown = useCountdown(3, '/order');

  return (
    <Layout>
      <Flex
        direction="column"
        justify="center"
        align="center"
        css={homeContainerStyles}
      >
        <Flex direction="column" align="center">
          <Text>주문에 실패하였습니다.</Text>
          <Text>다시 시도해주세요.</Text>
          <Spacing size={10} />
          <Text>{countdown}초 후 주문하기 페이지로 이동합니다.</Text>
        </Flex>
      </Flex>
    </Layout>
  );
}

const homeContainerStyles = css`
  height: 100vh;
`;

export default Error;
