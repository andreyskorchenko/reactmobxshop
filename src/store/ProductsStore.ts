import { makeAutoObservable, runInAction } from 'mobx';
import { IProduct } from '@/types';
import api from '@/api';

class ProductsStore {
  private products: IProduct[] = [];
  public pending: boolean = false;
  public error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  get list(): IProduct[] {
    return this.products;
  }

  setPending(status: boolean): void {
    this.pending = status;
  }

  setError(error: string | null): void {
    this.error = error;
  }

  async fetchData(abortSignal?: AbortSignal) {
    try {
      this.setPending(true);
      await runInAction(async () => {
        this.products = await api.products.getProducts(abortSignal);
      });

      this.setError(null);
    } catch (err) {
      this.setError(`Failed fetching data: ${err}`);
    } finally {
      this.setPending(false);
    }
  }
}

export default new ProductsStore();
