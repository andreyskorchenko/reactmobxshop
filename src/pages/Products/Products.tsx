import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Product, Spinner } from '@/components';
import ProductsStore from '@/store/ProductsStore';
import { useAbortSignal } from '@/hooks';
import styles from './Products.module.scss';

export const Products = observer(() => {
  const abortSignal = useAbortSignal();

  useEffect(() => {
    ProductsStore.fetchData(abortSignal);
  }, []);

  return (
    <div className={styles.container}>
      {ProductsStore.pending ? (
        <Spinner />
      ) : (
        ProductsStore.list.map((product) => (
          <Product info={product} key={product.id} />
        ))
      )}
    </div>
  );
});
