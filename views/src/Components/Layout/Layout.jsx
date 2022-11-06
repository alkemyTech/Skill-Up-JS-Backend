import React from 'react'
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import FooterContainer from '../Footer/FooterContainer';

const Layout = () => {
  return (
    <div>
            <Navbar />
            <div>
              <Outlet />
            </div>
            <FooterContainer />
    </div>
  )
}

export default Layout;