import { Item } from '../models/item';
import { request } from './fetch';

export const getItemList = () => {
  return request.get<Item[]>('/items');
};
