import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '@/layouts';
import { Products, Basket } from '@/pages';

const App: FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Products />} />
        <Route path={'basket'} element={<Basket />} />
      </Route>
    </Routes>
  );
};

export default App;
