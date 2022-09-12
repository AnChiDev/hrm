import React from 'react';
import { Card, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

    const Salary = (props) => {
        const basicSalary = 3000000;
        const overTimeSalary = 200000;
      
        const staffSalary = props.staffs.staffs.map((staff) => {
            const salary = parseInt(((staff.salaryScale * basicSalary) + (staff.overTime * overTimeSalary)),10);
            return (
                <div key={staff.id} className="col-12 col-md-6 col-lg-4 my-2">
                    <Card className="margin-salary">
                        <div className="m-4">
                        <CardTitle>{staff.name}</CardTitle>
                        <CardText>Mã nhân viên: {staff.id}</CardText>
                        <CardText>Hệ số lương: {staff.salaryScale}</CardText>
                        <CardText>Số giờ làm thêm: {staff.overTime}</CardText>
                        <CardText className="salary">Lương: {salary.toLocaleString()} VND</CardText>
                        </div>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">             
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/staff'>Nhân Viên</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
                    </Breadcrumb> 
                </div>
                <div className="row">
                    {staffSalary}
                </div>
            </div>
        );
    }


export default Salary;