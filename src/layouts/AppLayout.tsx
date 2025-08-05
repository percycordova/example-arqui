import { Outlet } from 'react-router-dom';
import { Header } from '@/components/common';

const AppLayout = () => {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto ">
        <Outlet />
      </div>
    </>
  );
};

export default AppLayout;
