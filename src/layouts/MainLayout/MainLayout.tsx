import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import BasketStore from '@/store/BasketStore';
import BasketIcon from '@/public/assets/icons/basket.svg';
import styles from './MainLayout.module.scss';

export const MainLayout: FC = observer((): JSX.Element => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav>
          <ul>
            <li>
              <Link to={'/'}>Products</Link>
            </li>
          </ul>
        </nav>

        <Link to={'/basket'}>
          <div className={styles.basket}>
            {BasketStore.countProducts ? (
              <div className={styles.basket__badge}>
                <p>{BasketStore.countProducts}</p>
              </div>
            ) : null}

            <div className={styles.basket__icon}>
              <BasketIcon />
            </div>
          </div>
        </Link>
      </header>

      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
});
