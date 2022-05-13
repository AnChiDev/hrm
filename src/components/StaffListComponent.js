import react, {Component} from 'react';
import {Card, CardText, CardTitle, CardBody} from 'reactstrap';
import StaffInfo from './StaffInfo.js'


class StaffList extends Component{
constructor(props){
    super(props);
    this.state ={
        selectedStaff: null
    }
}
    onStaffSelect(staff) {
    this.setState({ selectedStaff: staff});
}
//hiển thị thông tin khi click
//    renderStaff(staff) {
//             if (staff != null)
//                 return(
//                     <Card>
//                         <CardBody>
//                           <CardTitle>Họ và tên: {staff.name}</CardTitle>
//                           <CardText>Ngày sinh: {staff.doB} </CardText>
//                           <CardText>Ngày vào công ty:{staff.startDate} </CardText>
//                           {/* <CardText>Phòng ban:{staff.department} </CardText> */}
//                           <CardText>Số ngày nghỉ còn lại:{staff.annualLeave} </CardText>
//                           <CardText>Số ngày đã làm thêm: {staff.overTime} </CardText>
//                         </CardBody>
//                     </Card>
//                 );
//             else
//                 return(
//                     <div></div>
//                 );
//         }
        render() {
            const menu = this.props.staffs.map((staff) => {
                return (
                  <div  className="col-12 col-md-5 m-1">
                    <Card key={staff.id}
                      onClick={() => this.onStaffSelect(staff)}>
                          <CardTitle>{staff.name}</CardTitle>
                    </Card>
                  </div>
                );
            });
    
            return (
                <div className="container">
                    <div className="row">
                        {menu}
                    </div>
                    <div className="row">
                      <div  className="col-12 col-md-5 m-1">
                       {/* {this.renderStaff(this.state.selectedStaff)} */}
                       <StaffInfo selectedStaff={this.state.selectedStaff} />
                     </div>
                    
                    </div>
                </div>
            );
        }
    }

export default StaffList;