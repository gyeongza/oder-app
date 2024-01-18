import { css } from '@emotion/react';
import Flex from './Flex';
import { colors } from '../../styles/colorPalette';
import Text from './Text';
import Button from './Button';

function FixedBottomSheet() {
  return (
    <Flex justify="center" css={bottomSheetContainer}>
      <Flex direction="column" justify="center" css={containerStyles}>
        <Flex direction="column" align="flex-end">
          <Text>총 수량</Text>
          <Text>총 가격</Text>
        </Flex>
        <Flex justify="center">
          <Button css={orderButtonStyles}>주문하기</Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

const bottomSheetContainer = css`
  position: sticky;
  bottom: 0;
  max-width: 600px;
  height: 170px;
  margin: 0 auto;
  z-index: 10;
  box-shadow: 0 -5px 8px 0 ${colors.grey};
  border-radius: 20px 20px 0 0;
`;

const containerStyles = css`
  width: 500px;
  gap: 18px;
  padding: 23px 27px;
`;

const orderButtonStyles = css`
  width: 100%;
  height: 48px;
  padding: 18px 27px;
`;

export default FixedBottomSheet;
