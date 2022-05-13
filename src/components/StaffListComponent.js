import react, {Component} from 'react';
import {Card, CardText, CardTitle, CardBody} from 'reactstrap';


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
   renderStaff(staff) {
            if (staff != null)
                return(
                    <Card>
                        <CardBody>
                          <CardTitle>{staff.name}</CardTitle>
                        </CardBody>
                    </Card>
                );
            else
                return(
                    <div></div>
                );
        }
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
                       {this.renderStaff(this.state.selectedStaff)}
                     </div>
                    
                    </div>
                </div>
            );
        }
    }

export default StaffList;