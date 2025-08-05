import { Outlet } from 'react-router-dom';
import { Header } from '@/components/common';

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default AppLayout;
