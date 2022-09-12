import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Product, Spinner } from '@/components';
import ProductsStore from '@/store/ProductsStore';
import styles from './Products.module.scss';

export const Products = observer(() => {
  useEffect(() => {
    ProductsStore.fetchData();
  }, []);

  return (
    <div className={styles.container}>
      {ProductsStore.isLoading ? (
        <Spinner />
      ) : (
        ProductsStore.list.map((product) => (
          <Product info={product} key={product.id} />
        ))
      )}
    </div>
  );
});
