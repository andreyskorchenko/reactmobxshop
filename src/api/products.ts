import axios from 'axios';
import { IProduct } from '@/types';

export const getProducts = async (
  abortSignal?: AbortSignal
): Promise<IProduct[]> => {
  return await (
    await axios.get<IProduct[]>('http://localhost:3000/products', {
      signal: abortSignal,
    })
  ).data;
};
