import { FC } from 'react';
import SpinnerIcon from '@/public/assets/icons/spinner.svg';
import styles from './Spinner.module.scss';

export const Spinner: FC = (): JSX.Element => {
  return (
    <div className={styles.spinner}>
      <SpinnerIcon />
    </div>
  );
};
