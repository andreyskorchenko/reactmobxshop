import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Product } from '../../components';
import ProductsState from '../../store/ProductsState';
import styles from './Products.module.scss';

export const Products = observer(() => {
  useEffect(() => {
    ProductsState.fetchData();
  }, []);

  return (
    <div className={styles.container}>
      {ProductsState.list.map((product) => (
        <Product info={product} key={product.id} />
      ))}
    </div>
  );
});
