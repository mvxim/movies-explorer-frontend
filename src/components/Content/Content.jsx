import React from 'react';
import {
  Outlet
} from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
const Content = () => {
  return (
      <>
        <Header/>
        <Outlet/>
        <Footer/>
      </>
  );
};

export default Content;
