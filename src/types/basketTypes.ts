import { IProduct } from './productTypes';

export interface IBasket extends IProduct {
  quantity: number;
}
