import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import BasketStore from '@/store/BasketStore';
import { BasketProduct } from '@/components';
import { convertPrice } from '@/helpers';
import styles from './Basket.module.scss';

export const Basket: FC = observer((): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        {BasketStore.list.map((product) => (
          <BasketProduct info={product} key={product.id} />
        ))}
      </div>

      <div className={styles.total}>
        <h3>
          Total price: <span>{convertPrice(BasketStore.totalPrice)}</span>
        </h3>
      </div>
    </div>
  );
});
