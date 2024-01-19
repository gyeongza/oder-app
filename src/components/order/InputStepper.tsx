import { css } from '@emotion/react';
import Flex from '../common/Flex';
import styled from '@emotion/styled';
import useCartState from '../../hooks/useCartState';
import { ChangeEvent, useCallback } from 'react';

interface InputStepperProps {
  id: string;
}

function InputStepper({ id }: InputStepperProps) {
  const { quantity, increaseQuantity, decreaseQuantity, handleQuantityChange } =
    useCartState(id);

  const onChangeQuantity = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      handleQuantityChange(e.target.value);
    },
    [handleQuantityChange],
  );

  return (
    <Flex>
      <Flex align="center" css={stepperContainerStyles}>
        <DecreaseButton onClick={decreaseQuantity}>-</DecreaseButton>
        <input
          css={quantityInputStyles}
          value={quantity}
          onChange={onChangeQuantity}
        />
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

const quantityInputStyles = css`
  width: 30px;
  text-align: center;
  border: none;
  font-size: 18px;
`;

const IncreaseButton = styled.button`
  cursor: pointer;
  padding: 3px;
`;

export default InputStepper;
