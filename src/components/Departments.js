import React from "react";
import { Card, CardText, CardBody,
    CardTitle } from 'reactstrap';


function RenderDepartment ({department}) {
return(
            <Card  style={{
                height:'150px'
              }}>
                <CardBody>
                    <CardTitle tag="h5">{department.name}</CardTitle>
                    <CardText> Số lượng nhân viên: {department.numberOfStaff} </CardText>
                </CardBody>
            </Card>
)
}
const Department =(props) =>{
   
    const department = props.departments.map((department) => {
        return(
            <div key={department.id} className ="col col-12 col-md-6 col-lg-4 mt-4 mb-4">
                <RenderDepartment department={department} />
            </div>
        )
    })
    return(
        <div className="container">
            <div className="row">
                {department}
            </div>
        </div>
    )
}
export default Department;