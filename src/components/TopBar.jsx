import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const TopBar = () => (
  <Navbar color="danger" dark expand="md">
    <NavbarBrand href="/">Bandolim - Tea Store</NavbarBrand>
  </Navbar>
);
export default TopBar;