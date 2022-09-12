import React from "react";
import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from './LoadingComponent.js';

function RenderDepartment ({department}) {
  return(
    <Link className="text-decoration-none" to={`/department/${department.id}`} >
        <Card>
            <CardBody>                                
                <CardTitle tag="h2">{department.name}</CardTitle>
                <CardText>Số lượng nhân viên:{department.numberOfStaff}
              </CardText>
            </CardBody>
        </Card>
    </Link>
);
}
const Department = (props) => {
  const department = props.departments.departments.map((department) => {
      return(
          <div key={department.id} className="col-12 col-md-6 col-lg-4 my-2">
              <RenderDepartment department={department} />
          </div>
      )
  })
  if (props.departments.isLoading) {
      return(
          <div className="container">
              <div className="row">
                  <Loading />
              </div>
          </div>
      );
  }
  else if (props.departments.errMess) {
      return(
          <div className="container">
              <div className="row">
                  <h4>{props.departments.errMess}</h4>
              </div>
          </div>
      );
  }
  else {
      return(
          <div className="container">
              <div className="row">
                  <Breadcrumb>
                      <BreadcrumbItem><Link to='/staff'>Nhân Viên</Link></BreadcrumbItem>
                      <BreadcrumbItem active>Phòng Ban</BreadcrumbItem>
                  </Breadcrumb>
              </div>
              <div className="row">
                  {department}
              </div>
          </div>
      );
  }
}
export default Department;