import React, {Component} from 'react';
import {CardTitle,CardImg} from 'reactstrap';
import StaffInfo from './StaffInfo.js'


class StaffList extends Component{
constructor(props){
    super(props);
    this.state ={
        selectedStaff: null,
        classDefault: "col col-6 col-md-4 col-lg-2 mt-3"
    }
}
    onStaffSelect(staff) {
    this.setState({ selectedStaff: staff});
}
    onSelectedCol(col){
        col = document.getElementById('numberCol').value;
        this.setState({classDefault: col})
    }

        render() {
            const menu = this.props.staffs.map((staff) => {
                return (
                  <div className={this.state.classDefault}>
                    <div key={staff.id}
                      onClick={() => this.onStaffSelect(staff)}>
                        <CardImg src = {staff.image} alt={staff.name}/>
                          <CardTitle  style={{ fontWeight: 550, backgroundColor: "#C6E2FF", textAlign:"center", height:30}}>{staff.name}</CardTitle>
                    </div>
                  </div>
                );
            });
    
            return (
                <div className="container-fluid">
                    <div className="row">
                        {menu}
                    </div>
                    <div className="row">
                      <div  className="col-12 col-md-5">
                       {/* {this.renderStaff(this.state.selectedStaff)} */}
                       <StaffInfo selectedStaff={this.state.selectedStaff} />
                     </div>
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
                </div>

            );
           
        }
    }

export default StaffList;