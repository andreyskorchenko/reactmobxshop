import { FC } from 'react';
import AddToBasketIcon from '@/public/assets/icons/addtobasket.svg';
import { IProduct } from '../../types/productTypes';
import styles from './Product.module.scss';

interface IProps {
  info: IProduct;
}

export const Product: FC<IProps> = ({ info }) => {
  const addToBasket = () => {};

  const convertPrice = (price: number): string => {
    return price.toLocaleString('ru', {
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

        <button className={styles.product__add} onClick={addToBasket}>
          <span>{true ? 'In basket' : 'Add in basket'}</span>
          <AddToBasketIcon />
        </button>
      </div>
    </div>
  );
};
