import { makeAutoObservable } from 'mobx';
import { IBasket, IProduct } from '@/types';

class BasketStore {
  private basket: IBasket[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get listProducts(): IBasket[] {
    return this.basket;
  }

  get countProducts(): number {
    return this.basket.length;
  }

  get hasProduct() {
    return (id: number): boolean => {
      return this.basket.findIndex((product) => product.id === id) >= 0;
    };
  }

  get totalPrice(): number {
    return this.basket.reduce(
      (acc, { price, quantity }) => (acc += price * quantity),
      0
    );
  }

  addProduct(product: IProduct): void {
    const idx = this.basket.findIndex(({ id }) => id === product.id);
    if (idx >= 0) {
      this.basket.splice(idx, 1);
      return;
    }

    this.basket.push({ ...product, quantity: 1 });
  }

  increaseQuantityProduct(id: number) {
    this.basket.forEach((product) => {
      if (product.id === id) product.quantity += 1;
    });
  }

  decreaseQuantityProduct(id: number) {
    this.basket.forEach((product) => {
      if (product.id === id && product.quantity > 1) product.quantity -= 1;
    });
  }

  removeProduct(id: number) {
    this.basket = this.basket.filter((product) => product.id !== id);
  }
}

export default new BasketStore();
