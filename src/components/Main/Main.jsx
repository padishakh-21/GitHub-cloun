import React from 'react';
import { Outlet } from "react-router-dom"
import HomeNav from '../HomeNav/HomeNav';
import Sidebar from '../Sidebar/Sidebar';

const Main = () => {
  return (
    <>
      <div class="main-page position-relative pt-4">
        <HomeNav/>
        <div className="container-xxl container-fluid">
          <div className="row">
            <Sidebar/>
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;