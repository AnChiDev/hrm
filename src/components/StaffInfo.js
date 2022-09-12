import React,{useState} from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import { editStaff, deleteStaff } from '../redux/ActionCreators';
import { connect } from 'react-redux';
import { LocalForm, Control, Errors } from 'react-redux-form';
import { Col, Label, Row, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Fade } from 'react-animation-components';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => !val || val.length >= len;

const mapDispatchToProps = (dispatch) => ({
  editStaff: (staffEdit) => dispatch(editStaff(staffEdit)),
  deleteStaff: (id) => dispatch(deleteStaff(id)),
});
//hiển thị thông tin khi click
function RenderStaff({ staff, department, editStaff, deleteStaff }) {
  const [isOpen, setOpen] = useState(false);

  const onDeleteStaff = () => {
    deleteStaff(staff.id);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-4 col-lg-3">
        <Fade in>
            <Card>
              <CardImg
                width="100%"
                src={staff.image}
                alt={staff.name}
              />
            </Card>
    </Fade>
        </div>
        <div className="col-12 col-md-8 col-lg-9">
        <Fade in>
            <Card>
              <CardBody>
                <CardTitle>Họ và tên: {staff.name}</CardTitle>
                <CardText>
                  Ngày sinh: {dateFormat(staff.doB, 'dd/mm/yyyy')}
                </CardText>
                <CardText>
                  Ngày vào công ty: {dateFormat(staff.startDate, 'dd/mm/yyyy')}
                </CardText>
                <CardText>Phòng ban: {department.name}</CardText>
                <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
              </CardBody>
            </Card> 
            </Fade>
        </div>
        <div className="col-3">
          <button
            className="btn btn-primary "
            onClick={() => {
              setOpen(!isOpen);
            }}
          >
            {' '}
            Chỉnh Sửa
          </button>
        </div>
        <div className="col-3">
          <button className="btn btn-danger " onClick={() => onDeleteStaff()}>
            {' '}
            Xóa{' '}
          </button>
        </div>
      </div>
      <ModalEdit
        isOpen={isOpen}
        setOpen={setOpen}
        staff={staff}
        editStaff={editStaff}
      />
    </div>
  );
}

function ModalEdit({ isOpen, setOpen, editStaff, staff }) {
  staff.doB = dateFormat(staff.doB, 'yyyy-mm-dd');
  staff.startDate = dateFormat(staff.startDate, 'yyyy-mm-dd');
  const handleChange = (value) => {
    setOpen(!isOpen);

    const staffEdit = {
      id: staff.id,
      name: value.name,
      doB: value.doB,
      startDate: value.startDate,
      departmentId: value.departmentId,
      salaryScale: +value.salaryScale,
      annualLeave: +value.annualLeave,
      overTime: +value.overTime,
      image: staff.image,
    };
    editStaff(staffEdit);
  };

  //UI modal

  return (
    <Modal isOpen={isOpen} toggle={() => setOpen(!isOpen)}>
      <ModalHeader>Chỉnh sửa thông tin</ModalHeader>
      <ModalBody>
        <LocalForm
          onSubmit={(values) => handleChange(values)}
          initialState={staff}
        >
          <Row className="form-group">
            <Label htmlFor="name" md={4}>
              Tên
            </Label>
            <Col md={8}>
              <Control
                model=".name"
                className="form-control"
                validators={{
                  required,
                  maxLength: maxLength(30),
                  minLength: minLength(3),
                }}
              />
              <Errors
                className="text-danger"
                model=".name"
                messages={{
                  required: 'Yêu cầu nhập',
                  maxLength: 'Yêu cầu nhập tối đa 30 kí tự ',
                  minLength: 'Yêu cầu nhập tối thiểu 3 kí tự',
                }}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="doB" md={4}>
              Ngày sinh
            </Label>
            <Col md={8}>
              <Control
                type="date"
                model=".doB"
                name="doB"
                className="form-control"
                validators={{
                  required,
                }}
              />
              <Errors
                className="text-danger"
                model=".doB"
                messages={{
                  required: 'Yêu cầu nhập',
                }}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="startDate" md={4}>
              Ngày vào công ty
            </Label>
            <Col md={8}>
              <Control
                type="date"
                model=".startDate"
                name="startDate"
                className="form-control"
                validators={{
                  required,
                }}
              />
              <Errors
                className="text-danger"
                model=".startDate"
                messages={{
                  required: 'Yêu cầu nhập',
                }}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="department" md={4}>
              Phòng ban
            </Label>
            <Col md={8}>
              <select model=".department" className="form-control" id="department"
            >
                <option value="">Select Department</option>
                <option value="Dept01">Sale</option>
                <option value="Dept02">HR</option>
                <option value="Dept03">Marketing</option>
                <option value="Dept04">IT</option>
                <option value="Dept05">Finance</option>
              </select>
            </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="salaryScale" md={4}>
              Hệ số lương
            </Label>
            <Col md={8}>
              <Control
                type="number"
                model=".salaryScale"
                name="salaryScale"
                className="form-control"
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="annualLeave" md={4}>
              Số ngày nghỉ còn lại
            </Label>
            <Col md={8}>
              <Control
                type="number"
                model=".annualLeave"
                name="annualLeave"
                className="form-control"
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="overTime" md={4}>
              Số ngày đã làm thêm
            </Label>
            <Col md={8}>
              <Control
                type="number"
                model=".overTime"
                name="overTime"
                className="form-control"
              />
            </Col>
          </Row>
          <Button type="submit" color="primary">
            {' '}
            Chỉnh sửa{' '}
          </Button>
        </LocalForm>
      </ModalBody>
    </Modal>
  );
}

const StaffInfo = (props) => {
  
  if (props.staff != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/staff">Nhân Viên</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="row">
          <RenderStaff
            staff={props.staff}
            department={props.department}
            editStaff={props.editStaff}
            deleteStaff={props.deleteStaff}
          />
          
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};
export default connect(null, mapDispatchToProps)(StaffInfo);
