import axios from 'axios';
import { makeAutoObservable, flow } from 'mobx';
import { IProduct } from '../types/productTypes';

class ProductsState {
  private products: IProduct[] = [];
  public isFetching: boolean = false;
  public error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  get list(): IProduct[] {
    return this.products;
  }

  fetchData = flow(function* (this: ProductsState) {
    try {
      this.isFetching = true;
      const response: IProduct[] = yield (yield axios.get<IProduct[]>(
        'http://localhost:3000/products'
      )).data;

      this.products = response;
      this.isFetching = false;
      this.error = null;
    } catch (err) {
      this.isFetching = false;
      this.error = 'Failed fetching data';
    }
  });
}

export default new ProductsState();
