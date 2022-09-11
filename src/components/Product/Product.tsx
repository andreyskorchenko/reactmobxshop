import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import cn from 'classnames';
import { IProduct } from '@/types';
import { convertPrice } from '@/helpers';
import BasketStore from '@/store/BasketStore';
import AddToBasketIcon from '@/public/assets/icons/addtobasket.svg';
import styles from './Product.module.scss';

export const Product: FC<{ info: IProduct }> = observer(({ info }) => {
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
            [styles.product__add_inbasket]: BasketStore.hasProduct(info.id),
          })}
          onClick={() => BasketStore.addProduct(info)}
        >
          <span>
            {BasketStore.hasProduct(info.id) ? 'In basket' : 'Add basket'}
          </span>
          <AddToBasketIcon />
        </button>
      </div>
    </div>
  );
});
