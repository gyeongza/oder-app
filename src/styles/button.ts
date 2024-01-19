import { css } from '@emotion/react';
import { colors } from './colorPalette';

export const buttonColorMap = {
  primary: css`
    background-color: ${colors.black};
    color: ${colors.white};
  `,
  success: css`
    background-color: ${colors.grey};
    color: ${colors.white};
  `,
};

export type ButtonColor = keyof typeof buttonColorMap;
