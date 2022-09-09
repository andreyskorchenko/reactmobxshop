import { FC } from 'react';
import { IBasket } from '@/types';
import { convertPrice } from '@/helpers';
import BasketStore from '@/store/BasketStore';
import PlusIcon from '@/public/assets/icons/plus.svg';
import MinusIcon from '@/public/assets/icons/minus.svg';
import TrashIcon from '@/public/assets/icons/trash.svg';
import styles from './BasketProduct.module.scss';

export const BasketProduct: FC<{ info: IBasket }> = ({ info }) => {
  return (
    <div className={styles['basket-product']}>
      <div className={styles['basket-product__image']}>
        <img src={info.image} alt={info.title} />
      </div>

      <div className={styles['basket-product__info']}>
        <div className={styles['basket-product__name']}>
          <h3>{info.title}</h3>
        </div>

        <div className={styles['basket-product__price']}>
          <h4>
            {convertPrice(info.price)}
            <span>X {info.quantity}</span>
          </h4>
        </div>
      </div>

      <div className={styles['basket-product__tool']}>
        <div className={styles['basket-product__counter']}>
          <button
            className={styles['basket-product__plus']}
            onClick={() => BasketStore.plusQuantity(info.id)}
          >
            <PlusIcon />
          </button>

          <div className={styles['basket-product__quantity']}>
            <h4>{info.quantity}</h4>
          </div>

          <button
            className={styles['basket-product__minus']}
            onClick={() => BasketStore.minusQuantity(info.id)}
            disabled={info.quantity <= 1}
          >
            <MinusIcon />
          </button>
        </div>

        <button
          className={styles['basket-product__remove']}
          onClick={() => BasketStore.remove(info.id)}
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  );
};
