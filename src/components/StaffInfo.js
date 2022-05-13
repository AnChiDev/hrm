import react, {Component} from 'react';
import {Card, CardText, CardTitle, CardBody} from 'reactstrap';
import dateFormat, { masks } from "dateformat";


class StaffInfo extends Component{

//hiển thị thông tin khi click
   renderStaff(staff) {
            if (staff != null)
                return(
                    <Card>
                        <CardBody>
                          <CardTitle>Họ và tên: {staff.name}</CardTitle>
                          <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")} </CardText>
                          <CardText>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")} </CardText>
                          <CardText>Phòng ban: {staff.department.name} </CardText>
                          <CardText>Số ngày nghỉ còn lại: {staff.annualLeave} </CardText>
                          <CardText>Số ngày đã làm thêm: {staff.overTime} </CardText>
                        </CardBody>
                    </Card>
                );
            else
                return(
                    <div></div>
                );
        }
        render() {
            let staff;
            if (this.props.selectedStaff) {
                staff = (
                    <div className="row">
                        {this.renderStaff(this.props.selectedStaff)}
                     
                    </div>
                )
            } else {
                staff = <div></div>
            }
            return (
                <div className="container">
                    {staff}
                </div>
            );
        }
    }

export default StaffInfo;