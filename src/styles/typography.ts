import { css } from '@emotion/react';

export const typographyMap = {
  t1: css`
    font-size: 25px;
    line-height: 1.35;
  `,
  t2: css`
    font-size: 18px;
    line-height: 1.34;
  `,
  t3: css`
    font-size: 13px;
    line-height: 1.5;
  `,
};

export type Typography = keyof typeof typographyMap;
