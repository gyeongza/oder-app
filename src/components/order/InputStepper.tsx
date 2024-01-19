import { css } from '@emotion/react';
import Flex from '../common/Flex';
import Text from '../common/Text';
import styled from '@emotion/styled';
import useCartState from '../../hooks/useCartState';

interface InputStepperProps {
  id: string;
}

function InputStepper({ id }: InputStepperProps) {
  const { currentQuantity, increaseQuantity, decreaseQuantity } =
    useCartState(id);

  return (
    <Flex>
      <Flex align="center" css={stepperContainerStyles}>
        <DecreaseButton onClick={decreaseQuantity}>-</DecreaseButton>
        <Text css={quantityTextStyles}>{currentQuantity}</Text>
        <IncreaseButton onClick={increaseQuantity}>+</IncreaseButton>
      </Flex>
    </Flex>
  );
}

const stepperContainerStyles = css`
  gap: 10px;
`;

const DecreaseButton = styled.button`
  cursor: pointer;
  padding: 3px;
`;

const quantityTextStyles = css`
  width: 30px;
  text-align: center;
`;

const IncreaseButton = styled.button`
  cursor: pointer;
  padding: 3px;
`;

export default InputStepper;
