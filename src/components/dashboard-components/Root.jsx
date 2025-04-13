import React from 'react';
import DashboardNavbar from './DashboardNavbar';
import Sidebar from './Sidebar';

const Root = ({ children }) => {
  return (
    <>
      <DashboardNavbar />
      {children}
      <Sidebar />
    </>
  );
};

export default Root;
