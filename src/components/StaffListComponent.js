import React, {useState} from 'react';
import { Card, CardImg,
    CardTitle, Breadcrumb, BreadcrumbItem,Input, Form, Row, Col, Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import AddStaff from './AddStaff';
import { Loading } from './LoadingComponent';
import { FadeTransform } from 'react-animation-components';


function RenderStaffList ({staff}) {
    return (
        <FadeTransform
        in
        transformProps={{
          exitTransform: 'scale(0.5) translateY(50%)',
        }}
      >
        <Card>
            <Link to={`/StaffList/${staff.id}`} >
            <CardImg src = '/assets/images/alberto.png' alt={staff.name}/>
            <CardTitle  style={{ fontWeight: 550, backgroundColor: "#C6E2FF", textAlign:"center", height:35}}>{staff.name}</CardTitle>
            </Link>
        </Card>
        </FadeTransform>
    );
}

const StaffList =(props)=>{
    const [searchInput, setSearchInput] = useState('');
    const [searchStaff, setSearchStaff] = useState('');
  
    const handleSearch = (event) => {
      event.preventDefault();
      const search = props.staffs.staffs.filter((staff) =>
        staff.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setSearchStaff(search);
    };
  
    const SearchStaff = (props) => {
      return props.staff.map((staff) => {
        return (
          <div key={staff.id} className="col-12 col-md-4 col-lg-2 my-2">
            <RenderStaffList staff={staff} />
          </div>
        );
      });
    };
    const menu = props.staffs.staffs.map((staff) => {
        return (

            <div key={staff.id} className="col-12 col-md-4 col-lg-2 my-2">
                <RenderStaffList staff={staff}/>
            </div>
     
        );
    });
    if(props.staffs.isLoading){
        return(
            <div className="container">
                <div className="row">
                    <Loading/>
                </div>
            </div>
        )
    } else if(props.staffs.errMess){
        return(
            <div className="container">
                <div className= "row">
                    <h4>{props.staffs.errMess}</h4>
                </div>
            </div>
        );
    } else
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active><Link to="/StaffList">Nhân viên</Link></BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className ="row mb-3">
                    <div className = "col col-12 col-md-6 col-lg-6">
                    <p> Tìm kiếm nhân viên:  </p>
                    <div className="col col-6">
                    <Form>
                    <Row className="form-group" >
                        <Col md={10}>
                            <Input type="text" name="name" id="name"
                                onChange={(e) => setSearchInput(e.target.value)}
                                placeholder="Nhập tên nhân viên muốn tìm"
                            />
                        </Col>
                        <Col md={2} >
                            <Button color="primary" type="submit"  onClick={(event) => handleSearch(event)} >Tìm</Button>
                        </Col>
                    </Row>
                </Form>
                </div>
                </div>
             
                <div className = "col col-12 col-md-6 col-lg-6">
                <p> Thêm nhân viên mới:  </p>
                    <div className="col col-6">
                    <AddStaff staffs={props.staffs.staffs} handleSubmit={props.handleSubmit}/>
                    </div>
                    </div>
                </div>
                
                <div className ="row">
                <div className="col-12">
                    <h3>Danh sách nhân viên</h3>
                    <hr />  
                </div>                
            </div>
            <div className="row">
                    {searchStaff ? <SearchStaff staff={searchStaff} /> : menu}
                </div>    
                <div className="row">
                    <p> Bấm vào tên nhân viên để xem thông tin </p>
                </div>
                

        </div>
    )
}
    
  
                

export default StaffList;