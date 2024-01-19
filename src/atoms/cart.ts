import { atom } from 'recoil';
import { Cart } from '../models/product';

export const cartState = atom<Cart[]>({
  key: 'cartState',
  default: [],
});
