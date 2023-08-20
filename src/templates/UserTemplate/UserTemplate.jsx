import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const UserTemplate = () => {
  // dùng chung header và một footer
  return (
    <div>
      <Header />
      {/* // Outlet giúp xác định component của route con sẽ được hiển thị ở đâu trong template  */}
      <Outlet />
      {/* // footer  */}
      <Footer />
    </div>
  );
};

export default UserTemplate;
