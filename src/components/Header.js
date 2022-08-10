import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header(){
return(
  <div>
  <Navbar bg="primary" expand="lg" >
  <Container>
    <Navbar.Brand href="/" className ="text-light fs-3"><i class="fa fa-vine" aria-hidden="true"></i></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/"  className ="text-light fs-5"><i class="fa fa-users" aria-hidden="true"> Nhân viên</i></Nav.Link>
        <Nav.Link href="/"  className ="text-light fs-5"><i class="fa fa-id-card-o" aria-hidden="true"> Phòng ban</i></Nav.Link>
        <Nav.Link href="/"  className ="text-light fs-5"><i class="fa fa-money" aria-hidden="true"> Bảng lương</i></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<div className ="container">
  <div className ="row"> 
  <h4>Nhân viên</h4>
  </div>
</div>
</div>
)
}
export default Header;