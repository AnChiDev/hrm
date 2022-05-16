import {Navbar, NavbarBrand} from 'reactstrap';
import React from 'react';

function Header(){
return(
      <Navbar color="primary" dark light>
        <NavbarBrand href="/"><h4>Ứng dụng quản lý nhân sự v1.0</h4></NavbarBrand>
      </Navbar>
)
}
export default Header;