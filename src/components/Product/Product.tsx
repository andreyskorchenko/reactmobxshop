import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import cn from 'classnames';
import BasketStore from '../../store/BasketStore';
import { IProduct } from '../../types/productTypes';
import AddToBasketIcon from '@/public/assets/icons/addtobasket.svg';
import styles from './Product.module.scss';

interface IProps {
  info: IProduct;
}

export const Product: FC<IProps> = observer(({ info }) => {
  const convertPrice = (price: number): string => {
    return price.toLocaleString('us', {
      currency: 'usd',
      style: 'currency',
      minimumFractionDigits: 0,
    });
  };

  return (
    <div className={styles.product}>
      <div className={styles.product__image}>
        <img src={info.image} alt={info.title} />
      </div>

      <div className={styles.product__name}>
        <h3>{info.title}</h3>
      </div>

      <div className={styles.product__basket}>
        <p className={styles.product__price}>{convertPrice(info.price)}</p>

        <button
          className={cn(styles.product__add, {
            [styles.product__add_inbasket]: BasketStore.has(info.id),
          })}
          onClick={() => BasketStore.add(info)}
        >
          <span>{BasketStore.has(info.id) ? 'In basket' : 'Add basket'}</span>
          <AddToBasketIcon />
        </button>
      </div>
    </div>
  );
});
