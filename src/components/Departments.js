import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components';

// Presentational Component
class RenderDept extends Component {
	render() {
		return (
			<FadeTransform
				in
				transformProps={{
					exitTransform: 'scale(0.5) translateY(-50%)',
					duration: 1000,
				}}>
				<Link to={`/departments/${this.props.dept.id}`}>
                <Card>
            <CardBody>                                
                <CardTitle tag="h2" style={{color:"black"}}>{this.props.dept.name}</CardTitle>
                <CardText>Số lượng nhân viên: {this.props.staffNo.length}
              </CardText>
            </CardBody>
        </Card>
				
				</Link>
			</FadeTransform>
		);
	}
}

//Container components
class Department extends Component {
	render() {
		//Dung map() de fetch toan bo data tu props cua MainComponent
		const departments = this.props.departments.map((department) => {
			return (
				<div className="col-12 col-md-6 col-lg-4 mt-2 mb-2" key={department.id}>
					<RenderDept
						dept={department}
						staffNo={this.props.staffs.filter(
							(staff) => staff.departmentId === department.id
						)}
					/>
				</div>
			);
		});
		return (
			<div className="container">
				<div className="row shadow m-3">{departments}</div>
			</div>
		);
	}
}

export default Department;
