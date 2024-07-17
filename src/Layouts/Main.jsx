// import { useEffect, useState } from 'react';
// import Navbar from '../Shared/Navbar/Navbar';
// import Home from '../Pages/Home/Home';
// import Dashboard from './Dashboard';
import { Outlet } from 'react-router-dom';
import Navbasrs from '../Shared/Navbar/Navbasrs';

const Main = () => {


  return (
    <div>
      <Navbasrs />
       {/* <Home /> */}
        {/* <Dashboard /> */}
        <Outlet></Outlet>
    </div>
  );
};

export default Main;
