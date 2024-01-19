import { css } from '@emotion/react';
import Flex from './Flex';
import { colors } from '../../styles/colorPalette';
import Text from './Text';
import Button from './Button';
import styled from '@emotion/styled';

function FixedBottomSheet() {
  return (
    <BottomSheetContainer>
      <Flex direction="column" css={containerStyles}>
        <Flex direction="column" align="flex-end">
          <Text>총 수량</Text>
          <Text>총 가격</Text>
        </Flex>
        <Flex justify="center">
          <Button css={orderButtonStyles}>주문하기</Button>
        </Flex>
      </Flex>
    </BottomSheetContainer>
  );
}

const BottomSheetContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 600px;
  height: 170px;
  margin: 0 auto;
  box-shadow: 0 -5px 8px 0 ${colors.grey};
  border-radius: 20px 20px 0 0;
  z-index: 10;
`;

const containerStyles = css`
  max-width: 500px;
  gap: 18px;
  margin: 0 auto;
  padding: 20px;
`;

const orderButtonStyles = css`
  width: 100%;
  height: 48px;
`;

export default FixedBottomSheet;
