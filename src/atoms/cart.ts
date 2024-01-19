import { atom, selector } from 'recoil';
import { Cart } from '../models/product';
import { itemListSelector } from './item';

export const cartState = atom<Cart[]>({
  key: 'cartState',
  default: [],
});

export const cartTotalQuantitySelector = selector({
  key: 'cartTotalQuantity',
  get: ({ get }) => {
    const cart = get(cartState);

    return cart.reduce((total, cartItem) => {
      return total + cartItem.quantity;
    }, 0);
  },
});

export const cartTotalPriceSelector = selector({
  key: 'cartTotalPrice',
  get: ({ get }) => {
    const cart = get(cartState);
    const products = get(itemListSelector);

    return cart.reduce((total, cartItem) => {
      const product = products?.find((p) => p.id === cartItem.id);

      return total + (product?.price || 0) * cartItem.quantity;
    }, 0);
  },
});
