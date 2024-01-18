import styled from '@emotion/styled';
import { ButtonColor, buttonColorMap } from '../../styles/button';
import { css } from '@emotion/react';

interface ButtonProps {
  color?: ButtonColor;
  disalbed?: boolean;
}

const Button = styled.button<ButtonProps>(
  {
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  ({ color = 'primary' }) => buttonColorMap[color],
  ({ disabled }) =>
    disabled
      ? css`
          opacity: 0.5;
          cursor: initial;
        `
      : undefined,
);

export default Button;
