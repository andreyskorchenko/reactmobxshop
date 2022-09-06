import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Product } from '../../components';
import ProductsStore from '../../store/ProductsStore';
import styles from './Products.module.scss';

export const Products = observer(() => {
  useEffect(() => {
    ProductsStore.fetchData();
  }, []);

  return (
    <div className={styles.container}>
      {ProductsStore.list.map((product) => (
        <Product info={product} key={product.id} />
      ))}
    </div>
  );
});
