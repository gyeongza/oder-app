import { Product } from '../models/product';
import { request } from './fetch';

export const getItemList = () => {
  return request.get<Product[]>('/items');
};
