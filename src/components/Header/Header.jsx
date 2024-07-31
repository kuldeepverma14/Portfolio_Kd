import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import CustomNavLink from "../CustomNavLink/CustomNavLink";

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="flex bg-black items-center h-20 px-4 md:px-0 relative">
      <div className="w-[10%]"></div>
      <div className="flex justify-between items-center w-[80%]">
        <h1 className="font-extrabold text-3xl xsm:text-4xl text-nowrap text-white">Kuldeep Verma</h1>

        <nav className="hidden md:flex space-x-4"  >
          <CustomNavLink close={drawerOpen} setClose={ setDrawerOpen} to="/">Home</CustomNavLink>
          <CustomNavLink to="/about">About</CustomNavLink>
          <CustomNavLink to="/resume">Resume</CustomNavLink>
          {/* <CustomNavLink to="/services">Services</CustomNavLink>
          <CustomNavLink to="/portfolio">Portfolio</CustomNavLink> */}
          <CustomNavLink to="/contact">Contact</CustomNavLink>
        </nav>
      </div>
      <div className="w-[10%]"></div>

      {/* Mobile Drawer Toggle Button */}
      <button className="text-white md:hidden absolute right-5 top-7 z-50" onClick={toggleDrawer}>
        {drawerOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-40 flex flex-col items-center justify-center space-y-4 md:hidden">
          <CustomNavLink to="/" onClick={toggleDrawer}>Home</CustomNavLink>
          <CustomNavLink to="/about" onClick={toggleDrawer}>About</CustomNavLink>
          <CustomNavLink to="/resume" onClick={toggleDrawer}>Resume</CustomNavLink>
          {/* <CustomNavLink to="/services" onClick={toggleDrawer}>Services</CustomNavLink>
          <CustomNavLink to="/portfolio" onClick={toggleDrawer}>Portfolio</CustomNavLink> */}
          <CustomNavLink to="/contact" onClick={toggleDrawer}>Contact</CustomNavLink>
        </div>
      )}
    </div>
  );
}

export default Header;
