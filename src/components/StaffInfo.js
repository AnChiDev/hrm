import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";

//hiển thị thông tin khi click
function RenderStaff({ staff, department }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-12 col-md-4 col-lg-3 mb-4">
          <CardImg src={staff.image} className="staff-card-img"></CardImg>
        </div>
        <div className="col col-12 col-md-8 col-lg-9">
          <Card style={{ backgroundColor: "#E8E8E8" }}>
            <CardBody>
              <CardTitle>Họ và tên: {staff.name}</CardTitle>
              <CardText>
                Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}{" "}
              </CardText>
              <CardText>
                Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}{" "}
              </CardText>
              <CardText>Phòng ban: {department.name} </CardText>
              <CardText>Số ngày nghỉ còn lại: {staff.annualLeave} </CardText>
              <CardText>Số ngày đã làm thêm: {staff.overTime} </CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
const StaffInfo = (props) => {
  console.log(props.staff);
  if (props.staff != null && props.department != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/StaffList">Nhân viên</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.staff.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderStaff staff={props.staff} 
           department={props.department.filter(
            (department) => department.id === props.staff.departmentId)}/>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default StaffInfo;
