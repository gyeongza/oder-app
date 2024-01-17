import { css } from '@emotion/react';

export const colorPalette = css`
  :root {
    --black: #000000;
    --white: #fff;
    --grey: #c1c1c1;
    --orange100: #f75a2f;
    --orange10: #feeeea;
  }
`;

export const colors = {
  black: 'var(--black)',
  white: 'var(--white)',
  grey: 'var(--grey)',
  orange10: 'var(--orange10)',
  orange100: 'var(--orange100)',
};

export type Colors = keyof typeof colors;
