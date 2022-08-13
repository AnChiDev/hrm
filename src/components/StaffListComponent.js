import React, {Component} from 'react';
import { Card, CardImg,
    CardTitle, Breadcrumb, BreadcrumbItem,Input, Form, Row, Col, Button, Modal, ModalHeader, ModalBody, FormGroup, Label} from 'reactstrap';
import { Link } from 'react-router-dom';



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
        isModalOpen: false,
    }
   this.handleSearch = this.handleSearch.bind(this);
   this.handleAddStaff = this.handleAddStaff.bind(this);
   this.toggleModal = this.toggleModal.bind(this);
    }
    handleSearch(e){
        const searchName = this.search.value
        this.setState({
            staffs: this.props.staffs.filter(staff => staff.name.toLowerCase().includes(searchName.toLowerCase()))
        })
        e.preventDefault()
    }
    onSelectedCol(col){
        col = document.getElementById('numberCol').value;
        this.setState({classDefault: col})
    }
    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
       
      }
    handleAddStaff(event){
        this.toggleModal();
      event.preventDefault();
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
                    <Form>
                    <Row className="form-group" >
                        <Col md={10}>
                                <Button color="primary" type="submit" onClick={this.handleAddStaff}>Thêm nhân viên mới</Button>
                        </Col>
                    </Row>
                </Form>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Thêm nhân viên mới</ModalHeader>
                <ModalBody>
                <Form onSubmit={this.handleAddStaff}>
                            <FormGroup>
                                <Label htmlFor="name">Tên</Label>
                                <Input type="text" id="name" name="name"
                                    innerRef={(input) => this.name = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="doB ">Ngày sinh</Label>
                                <Input type="date" id="doB " name="doB "
                                    innerRef={(input) => this.doB = input}  />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="startDate">Ngày vào công ty</Label>
                                <Input type="date" id="startDate " name="startDate "
                                    innerRef={(input) => this.startDate= input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="department">Phòng ban</Label>
                                <Input type="select" id="department" name="department"
                                 innerRef={(input) => this.department= input}>
                                <option>Sales</option>
                                <option>HR</option>
                                <option>Marketing</option>
                                <option>IT</option>
                                <option>Finance</option>
                            </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="salaryScale">Hệ số lương</Label>
                                <Input type="number" id="salaryScale" name="salaryScale"
                                    innerRef={(input) => this.salaryScale = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="annualLeave">Số ngày nghỉ còn lại</Label>
                                <Input type="number" id="annualLeave" name="annualLeave"
                                    innerRef={(input) => this.annualLeave = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="overTime">Số ngày đã làm thêm</Label>
                                <Input type="number" id="overTime" name="overTime"
                                    innerRef={(input) => this.overTime = input} />
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Thêm</Button>
                        </Form>
                </ModalBody>
            </Modal>
                </div>
                    </div>
                </div>
            </div>

        );
        
    }
}

export default StaffList;