import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '@/components/common';
import { useEffect } from 'react';

const AppLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
    </>
  );
};

export default AppLayout;
