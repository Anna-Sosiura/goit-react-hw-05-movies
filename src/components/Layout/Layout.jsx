import Header from 'components/Header/Header';
import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div
      style={{
        maxWidth: 1400,
        margin: '20px auto',
        padding: 0,
        height: 100,
      }}
    >
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
