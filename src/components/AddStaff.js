/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import {
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  Row,
  Col,
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { postStaff, fetchStaffs } from '../redux/ActionCreators';
import { connect } from 'react-redux';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => !val || val.length >= len;


const mapDispatchToProps = (dispatch) => ({
  postStaff: (newStaff) => dispatch(postStaff(newStaff)),
  fetchStaffs: () => dispatch(fetchStaffs()),
});


class AddStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image:'/assets/images/alberto.png',
      isOpenModal: false,
      staffs: this.props.staffs,
      departments: this.props.departments,
    };
    this.toggleModal = this.toggleModal.bind(this); //mở modal điền thông tin
    this.handleAddStaff = this.handleAddStaff.bind(this); //open modal
    this.handleSubmit = this.handleSubmit.bind(this); //submit form
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  handleAddStaff() {
    this.toggleModal();
  }
 
  handleSubmit(value) {
    const salary = parseInt(
      value.salaryScale * 3000000 + value.overTime * 200000,
      10
    );
    const newStaff = {
      id: this.props.staffs.length,
      name: value.name,
      doB: value.doB,
      salaryScale: +value.salaryScale,
      startDate: value.startDate,
      departmentId: value.department,
      annualLeave: +value.annualLeave,
      overTime: +value.overTime,
      salary: salary,
      image: this.state.image,
    };
    this.toggleModal();
    this.props.postStaff(newStaff);
    this.props.fetchStaffs();

    // alert('Current State is: ' + JSON.stringify(newStaff));
  }

  render() {
    return (
      <div>
        <Button color="primary" type="submit" onClick={this.handleAddStaff}>
          {" "}
          Thêm nhân viên mới{" "}
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>
            Thêm nhân viên mới
          </ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group mb-3">
                <Label htmlFor="name" md={5}>
                  Họ và tên
                </Label>
                <Col md={7}>
                  <Control.text
                    model=".name"
                    id="name"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(30),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".startDate"
                    show="touched"
                    messages={{
                      required: "Yêu cầu nhập",
                      minLength: "Yêu cầu nhập tối thiểu 3 kí tự",
                      maxLength: "Yêu cầu nhập tối đa 30 kí tự",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group mb-3">
                <Label htmlFor="doB" md={5}>
                  Ngày sinh
                </Label>
                <Col md={7}>
                  <Control.text
                    type="date"
                    model=".doB"
                    id="doB"
                    className="form-control"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".doB"
                    show="touched"
                    messages={{
                      required: "Yêu cầu nhập",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group mb-3">
                <Label htmlFor="startDate" md={5}>
                  Ngày vào công ty
                </Label>
                <Col md={7}>
                  <Control.text
                    type="date"
                    model=".startDate"
                    id="startDate"
                    className="form-control"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".startDate"
                    show="touched"
                    messages={{
                      required: "Yêu cầu nhập",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group mb-3">
                <Label htmlFor="department" md={5}>
                  Phòng ban
                </Label>
                <Col md={7}>
                  <Control.select
                    model=".department"
                    id="department"
                    className="form-control"
                    validators={{
                      required,
                    }}
                  >
                    <option value="">Select Department</option>
                    <option value="Dept01">Sale</option>
                    <option value="Dept02">HR</option>
                    <option value="Dept03">Marketing</option>
                    <option value="Dept04">IT</option>
                    <option value="Dept05">Finance</option>
                  </Control.select>
                  <Errors
                    className="text-danger"
                    model=".department"
                    show="touched"
                    messages={{
                      required: "Yêu cầu chọn phòng ban",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group mb-3">
                <Label htmlFor="salaryScale" md={5}>
                  Hệ số lương
                </Label>
                <Col md={7}>
                  <Control.text
                    model=".salaryScale"
                    id="salaryScale"
                    className="form-control"
                    defaultValue={1}
                  />
                </Col>
              </Row>
              <Row className="form-group mb-3">
                <Label htmlFor="annualLeave" md={5}>
                  Số ngày nghỉ còn lại
                </Label>
                <Col md={7}>
                  <Control.text
                    model=".annualLeave"
                    id="annualLeave"
                    className="form-control"
                    defaultValue={1}
                  />
                 
                </Col>
              </Row>
              <Row className="form-group mb-3">
                <Label htmlFor="overTime" md={5}>
                  Số ngày đã làm thêm
                </Label>
                <Col md={7}>
                  <Control.text
                    model=".overTime"
                    id="overTime"
                    className="form-control"
                    defaultValue={1}
                  />
                </Col>
              </Row>
              <Button type="submit" color="primary">
                Thêm
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default connect(null, mapDispatchToProps)(AddStaff);