import React, {Component} from 'react';
import { Card, CardImg,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderStaffList ({staff}) {
    return (
        <Card>
            <Link to={`/StaffList/${staff.id}`} >
            <CardImg src = {staff.image} alt={staff.name}/>
            <CardTitle  style={{ fontWeight: 550, backgroundColor: "#C6E2FF", textAlign:"center", height:35}}>{staff.name}</CardTitle>
            </Link>
        </Card>
    );
}
class StaffList extends Component{
constructor(props){
    super(props);
    this.state ={
        staffs: this.props.staffs,
        classDefault: "col col-6 col-md-4 col-lg-2 mt-3"
    }
}
//     onStaffSelect(staff) {
//     this.setState({ selectedStaff: staff});
// }
    onSelectedCol(col){
        col = document.getElementById('numberCol').value;
        this.setState({classDefault: col})
    }

        render() {
            const menu = this.state.staffs.map((staff) => {
                return (
                    <div className={this.state.classDefault}>
                    <div key={staff.id}>
                      <RenderStaffList staff={staff}/>
                    </div>
                    </div>
          
                );
            });
    
            return (
                <div className="container">
                    <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active><Link to="/StaffList">Nhân viên</Link></BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Danh sách nhân viên</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    {menu}
                </div>
                    <div className="row">
                 
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