import React, {Component} from 'react';
import { Card, CardImg,
    CardTitle, Breadcrumb, BreadcrumbItem,Input, Form, Row, Col, Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import AddStaff from './AddStaff';

function RenderStaffList ({staff}) {
    return (
        <Card>
            <Link to={`/StaffList/${staff.id}`} >
            <CardImg src = {staff.image} alt={staff.name}/>
            <CardTitle  style={{ fontWeight: 550, backgroundColor: "#C6E2FF", textAlign:"center", height:35}}>{staff.name}</CardTitle>
            </Link>
        </Card>
    );
}

class StaffList extends Component{
constructor(props){
    super(props);
    this.state ={
        staffs: this.props.staffs,
        classDefault: "col col-6 col-md-4 col-lg-2 mt-3",
        searchName: "",

    }
   this.handleSearch = this.handleSearch.bind(this);
  
    }
    handleSearch(e){
        const searchName = this.search.value;
        this.setState({
            staffs: this.props.staffs.filter(staff => staff.name.toLowerCase().includes(searchName.toLowerCase()))
        })

        e.preventDefault()
    }
    onSelectedCol(col){
        col = document.getElementById('numberCol').value;
        this.setState({classDefault: col})
    }
    handleSubmit = (staff) => {
        this.props.handleSubmit(staff);
    }
    
    render() {
        const menu = this.state.staffs.map((staff) => {
            return (
                <div className={this.state.classDefault}>
                <div key={staff.id}>
                    <RenderStaffList staff={staff}/>
                </div>
                </div>
        
            );
        });
    
        return (
            <div className="container">
                <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active><Link to="/StaffList">Nhân viên</Link></BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Danh sách nhân viên</h3>
                    <hr />
                    
                </div>                
            </div>
            <div className="row">
                {menu}
            </div>
                <div className="row">
                    <p> Bấm vào tên nhân viên để xem thông tin </p>
                    <div id ="selectNumberCol" className ="mb-1" >
                    <label> Chọn số cột hiển thị: </label>
                    <select id ="numberCol" onChange={() => this.onSelectedCol()}>
                    <option value = "col col-6 col-md-4 col-lg-2 mt-3"> Mặc định</option>
                    <option value = "col col-6 col-md-12 col-lg-12 mt-3"> 1 cột</option>
                    <option value = "col col-6 col-md-4 col-lg-4 mt-3"> 3 cột</option>
                    <option value = "col col-6 col-md-3 col-lg-3 mt-3"> 4 cột</option>
                    <option value = "col col-6 col-md-6 col-lg-6 mt-3"> 2cột</option>
                    </select>
                </div>
                </div>
                <div className ="row mb-3">
                    <div className = "col col-12 col-md-6 col-lg-6">
                    <p> Tìm kiếm nhân viên:  </p>
                    <div class="col col-6">
                    <Form onSubmit={this.handleSearch}>
                    <Row className="form-group" >
                        <Col md={10}>
                            <Input type="text" name="name" id="name"
                                innerRef={input => this.search = input}
                                placeholder="Nhập tên nhân viên muốn tìm"
                            />
                        </Col>
                        <Col md={2} >
                            <Button color="primary" type="submit" >Tìm</Button>
                        </Col>
                    </Row>
                </Form>
                </div>
                </div>       
                <div className = "col col-12 col-md-6 col-lg-6">
                <p> Thêm nhân viên mới:  </p>
                    <div class="col col-6">
                    <AddStaff />
                    </div>
                    </div>
                </div>
            </div>

        );
        
    }
}

export default StaffList;