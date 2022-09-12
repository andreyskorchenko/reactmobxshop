import axios from 'axios';
import { makeAutoObservable, flow } from 'mobx';
import { IProduct } from '../types/productTypes';

class ProductsStore {
  private products: IProduct[] = [];
  public isLoading: boolean = false;
  public error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  get list(): IProduct[] {
    return this.products;
  }

  fetchData = flow(function* (this: ProductsStore) {
    try {
      this.isLoading = true;
      const response: IProduct[] = yield (yield axios.get<IProduct[]>(
        'http://localhost:3000/products'
      )).data;

      this.products = response;
      this.isLoading = false;
      this.error = null;
    } catch (err) {
      this.isLoading = false;
      this.error = 'Failed fetching data';
    }
  });
}

export default new ProductsStore();
