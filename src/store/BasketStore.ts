import { makeAutoObservable } from 'mobx';
import { IProduct } from '../types/productTypes';

class BasketStore {
  public basket: IProduct[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get count(): string | number {
    const len = this.basket.length;
    return len > 9 ? '9+' : len;
  }
}

export default new BasketStore();
