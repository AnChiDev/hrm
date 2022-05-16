import react, {Component} from 'react';
import {Card, CardText, CardTitle, CardBody} from 'reactstrap';
import StaffInfo from './StaffInfo.js'


class StaffList extends Component{
constructor(props){
    super(props);
    this.state ={
        selectedStaff: null,
        classDefault: "col-12 col-md-6 col-lg-6 mt-3"
    }
}
    onStaffSelect(staff) {
    this.setState({ selectedStaff: staff});
}
    onSelectedCol(col){
        col = document.getElementById('numberCol').value;
        this.setState({classDefault: col})
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
                  <div  className={this.state.classDefault}>
                    <Card key={staff.id}
                      onClick={() => this.onStaffSelect(staff)}>
                          <CardTitle>{staff.name}</CardTitle>
                    </Card>
                  </div>
                );
            });
    
            return (
                <div className="container-fluid">
                    <div className="row">
                        {menu}
                    </div>
                    <div className="row">
                      <div  className="col-12 col-md-5 m-1">
                       {/* {this.renderStaff(this.state.selectedStaff)} */}
                       <StaffInfo selectedStaff={this.state.selectedStaff} />
                     </div>
                     <p> Bấm vào tên nhân viên để xem thông tin </p>
                     <div id ="selectNumberCol" className ="m-3" >
                        <label> Chọn số cột hiển thị: </label>
                        <select id ="numberCol" onChange={() => this.onSelectedCol()}>
                        <option value = "col-12 col-md-6 col-lg-6 mt-3"> Mặc định</option>
                        <option value = "col-12 col-md-12 col-lg-12 mt-3"> 1 cột</option>
                        <option value = "col-12 col-md-4 col-lg-4 mt-3"> 3 cột</option>
                        <option value = "col-12 col-md-3 col-lg-3 mt-3"> 4 cột</option>
                        <option value = "col-12 col-md-2 col-lg-2 mt-3"> 6 cột</option>
                        </select>
                    </div>
                    
                    </div>
                </div>

            );
           
        }
    }

export default StaffList;