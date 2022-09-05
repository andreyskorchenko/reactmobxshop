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

  get has() {
    return (id: number): boolean => {
      return this.basket.findIndex((product) => product.id === id) >= 0;
    };
  }
}

export default new BasketStore();
