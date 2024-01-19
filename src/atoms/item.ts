import { atom, selector } from 'recoil';
import { getItemList } from '../apis/apis';
import { Product } from '../models/product';

export const itemListState = atom<Product[] | null>({
  key: 'itemListState',
  default: null,
});

export const itemListSelector = selector<Product[]>({
  key: 'itemListSelector',
  get: async ({ get }) => {
    const itemList = get(itemListState);

    if (itemList != null) {
      return itemList;
    }

    const response = await getItemList();

    return response;
  },
});
