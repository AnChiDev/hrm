import React, { Component } from 'react';
import {
  Card,
  CardBody,
	CardImg,
	CardText,
	CardTitle,
	Breadcrumb,
	BreadcrumbItem,
	Row,
	Col,
	Label,
	Button,
	Form,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';
import { FadeTransform } from 'react-animation-components';
import { Fade } from 'react-animation-components';

function RenderStaff({ staff, dept }) {
	if (staff != null && dept != null) {
		return (
      <div className="container">
      <div className="row">
        <div className="col-12 col-md-4 col-lg-3">
        <Fade in>
            <Card>
              <CardImg
                width="100%"
                src={staff.image}
                alt={staff.name}
              />
            </Card>
    </Fade>
        </div>
        <div className="col-12 col-md-8 col-lg-9">
        <Fade in>
            <Card>
              <CardBody>
                <CardTitle>Họ và tên: {staff.name}</CardTitle>
                <CardText>
                  Ngày sinh: {dateFormat(staff.doB, 'dd/mm/yyyy')}
                </CardText>
                <CardText>
                  Ngày vào công ty: {dateFormat(staff.startDate, 'dd/mm/yyyy')}
                </CardText>
                <CardText>Phòng ban: {dept.name}</CardText>
                <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
              </CardBody>
            </Card> 
            </Fade>
        </div>
        </div>
        </div>
		);
	} else {
		return <div></div>;
	}
}

class EditForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			staff: props.staff,
		};
	}

	handleSubmit(e) {
		e.preventDefault();
		const staffUpdated = {
			id: this.state.staff.id,
			name: this.state.staff.name,
			doB: this.state.staff.doB,
			salaryScale: parseFloat(this.state.staff.salaryScale, 2),
			startDate: this.state.staff.startDate,
			image: '/assets/images/alberto.png',
			departmentId: this.state.staff.departmentId,
			annualLeave: parseInt(this.state.staff.annualLeave, 10),
			overTime: parseInt(this.state.staff.overTime, 10),
		};
		this.props.onUpdate(staffUpdated);
	}
	render() {
		return (
			<div>
				<Form onSubmit={this.handleSubmit.bind(this)}>
					<Row className="mb-3">
						<Col md={4}>
							<Label htmlFor="name">Họ tên</Label>
						</Col>
						<Col md={8}>
							<input
								class="form-control"
								name="name"
								value={this.state.staff.name}
								onChange={(e) =>
									this.setState({
										staff: { ...this.state.staff, name: e.target.value },
									})
								}
							/>
							<input type="hidden" name="id" value={this.state.staff.id} />
						</Col>
					</Row>
					<Row className="mb-3">
						<Col md={4}>
							<Label htmlFor="doB">Ngày sinh</Label>
						</Col>
						<Col md={8}>
							<input
								class="form-control"
								type="date"
								name="doB"
								value={this.state.staff.doB}
								onChange={(e) =>
									this.setState({
										staff: { ...this.state.staff, doB: e.target.value },
									})
								}
							/>
						</Col>
					</Row>
					<Row className="mb-3">
						<Col md={4}>
							<Label htmlFor="startDate">Ngày vào công ty</Label>
						</Col>
						<Col md={8}>
							<input
								class="form-control"
								type="date"
								name="startDate"
								value={this.state.staff.startDate}
								onChange={(e) =>
									this.setState({
										staff: { ...this.state.staff, startDate: e.target.value },
									})
								}
							/>
						</Col>
					</Row>
          <Row className="mb-3">
						<Col md={4}>
							<Label htmlFor="departmentId">Phòng ban</Label>
						</Col>
						<Col md={8}>
							<select
								class="form-control"
								name="departmentId"
								value={this.state.staff.departmentId}
								onChange={(e) =>
									this.setState({
										staff: {
											...this.state.staff,
											departmentId: e.target.value,
										},
									})
								}>
								<option value="Dept01">Sale</option>
								<option value="Dept02">HR</option>
								<option value="Dept03">Marketing</option>
								<option value="Dept04">IT</option>
								<option value="Dept05">Finance</option>
							</select>
						</Col>
					</Row>
					<Row className="mb-3">
						<Col md={4}>
							<Label htmlFor="salaryScale">Hệ số lương</Label>
						</Col>
						<Col md={8}>
							<input
								class="form-control"
								name="salaryScale"
								value={this.state.staff.salaryScale}
								onChange={(e) =>
									this.setState({
										staff: { ...this.state.staff, salaryScale: e.target.value },
									})
								}
							/>
						</Col>
					</Row>
				
					<Row className="mb-3">
						<Col md={4}>
							<Label htmlFor="annualLeave">Số ngày nghỉ còn lại</Label>
						</Col>
						<Col md={8}>
							<input
								class="form-control"
								name="annualLeave"
								value={this.state.staff.annualLeave}
								onChange={(e) =>
									this.setState({
										staff: { ...this.state.staff, annualLeave: e.target.value },
									})
								}
							/>
						</Col>
					</Row>
					<Row className="mb-3">
						<Col md={4}>
							<Label htmlFor="overTime">Số ngày đã làm thêm</Label>
						</Col>
						<Col md={8}>
							<input
								class="form-control"
								name="overTime"
								value={this.state.staff.overTime}
								onChange={(e) =>
									this.setState({
										staff: { ...this.state.staff, overTime: e.target.value },
									})
								}
							/>
						</Col>
					</Row>
					<Button color="primary" type="submit">
						Update
					</Button>
				</Form>
			</div>
		);
	}
}

class StaffDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			select: true,
		};
	}
	render() {
		if (this.props.staff != null) {
			return (
				<div className="container">
					<div className="row">
						<Breadcrumb>
							<BreadcrumbItem>
								<Link to="/staff">Nhân viên</Link>
							</BreadcrumbItem>
							<BreadcrumbItem active>{this.props.staff.name}</BreadcrumbItem>
						</Breadcrumb>
						<div className="col-12">
							<h3>{this.props.staff.name}</h3>
							<Button
								color="warning"
								onClick={() => this.setState({ select: !this.state.select })}>
								Update
							</Button>
							<hr />
						</div>
					</div>
					{this.state.select ? (
						<FadeTransform
							in
							transformProps={{
								exitTransform: 'scale(0.5) translateY(-50%)',
							}}>
							<div className="row mb-3">
								<RenderStaff
									staff={this.props.staff}
									dept={
										this.props.dept.filter(
											(dp) => dp.id === this.props.staff.departmentId
										)[0]
									}
								/>
							</div>
						</FadeTransform>
					) : (
						<div className="row mb-3">
							<FadeTransform
								in
								transformProps={{
									exitTransform: 'scale(0.5) translateY(-50%)',
								}}>
								<EditForm
									staff={this.props.staff}
									onUpdate={this.props.onUpdateStaff}
								/>
							</FadeTransform>
						</div>
					)}
				</div>
			);
		} else {
			return <div></div>;
		}
	}
}

export default StaffDetail;