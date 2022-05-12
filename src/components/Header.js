import {Navbar, NavbarBrand} from 'reactstrap';
import React from 'react';

function Header(){
return(
<Navbar
    color="primary" dark 
    expand="md"
    fixed="top"
    light
>
 <div className ="container">
    <NavbarBrand  href ="/" >
      <h4>Ứng dụng quản lý nhân sự v1.0</h4>
    </NavbarBrand>
 </div>
</Navbar>
)
}
export default Header;