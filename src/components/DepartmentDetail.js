import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';


function RenderStaffsDept({ staff, department }) {
    return staff.map(staff => {
        return (
            <div className="container" key={staff.id} >
                <div className="row my-2">
                    <div className="col-12 col-md-4 col-lg-3">
              
                            <Card>
                                <CardImg width="100%" src={staff.image} alt={staff.name} />
                            </Card>
           
                    </div>
                    <div className="col-12 col-md-8 col-lg-9">
            
                            <Card>
                                <CardBody>
                                    <CardTitle>Họ và tên: {staff.name}</CardTitle>
                                    <CardText>Ngày sinh: {dateFormat(staff.doB, 'dd/mm/yyyy')}</CardText>
                                    <CardText>Ngày vào công ty: {dateFormat(staff.startDate, 'dd/mm/yyyy')}</CardText>
                                    <CardText>Phòng ban: {department.name}</CardText>
                                    <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                                    <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
                                </CardBody>
                            </Card>
            
                    </div>
                </div >
            </div>
        )
    })
}

export const DepartmentStaff = (props) => {
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem> 
                        <Link className="text-decoration-none" to="/">Nhân Viên</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem> 
                        <Link className="text-decoration-none" to="/department">Phòng Ban</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>{props.department.name}</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <RenderStaffsDept
                staff={props.staff}
                department={props.department}
            />
        </div>
    )
}