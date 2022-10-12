import React, { Component } from "react";
import StaffList from "./StaffListComponent.js";
import StaffDetail from "./StaffInfo.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Home from "./Home.js";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import Salary from "./Salary.js";
import { addStaff, fetchStaffs, fetchDepartments, fetchStaffsSalary, updateStaff, deleteStaff  } from '../redux/ActionCreators';
import DepartmentDetail from './DepartmentDetail';
import Department from "./Departments.js";
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const mapStateToProps = (state) => {
	return {
		staffs: state.staffs,
		departments: state.departments,
		staffsSalary: state.staffsSalary,
	};
};
const mapDispatchToProps = (dispatch) => ({
  addStaff: (staff) => {
		dispatch(addStaff(staff));
	},
	fetchStaffs: () => {
		dispatch(fetchStaffs());
	},
	fetchDepartments: () => {
		dispatch(fetchDepartments());
	},
	fetchStaffsSalary: () => {
		dispatch(fetchStaffsSalary());
	},
	deleteStaff: (id) => {
		dispatch(deleteStaff(id));
	},
	updateStaff: (staff) => {
		dispatch(updateStaff(staff));
	},
});


class Main extends Component {
  componentDidMount() {
  	this.props.fetchStaffs();
		this.props.fetchDepartments();
		this.props.fetchStaffsSalary();
  }
 

  render() {
    const HomePage = () => {
      return <Home />;
    };
    const StaffWithId = ({ match }) => {
			return (
				<StaffDetail
					staff={
						this.props.staffs.staffs.filter(
							(staff) => staff.id === parseInt(match.params.staffId, 10)
						)[0]
					}
					dept={this.props.departments.departments}
					onUpdateStaff={this.props.updateStaff}
				/>
			);
		};
      const StaffWithDept = ({ match }) => {
        return (
          <DepartmentDetail
          dept={
						this.props.departments.departments.filter(
							(dept) => dept.id === match.params.deptId
						)[0]
					}
					staff={this.props.staffs.staffs.filter(
						(staff) => staff.departmentId === match.params.deptId
					)}
      />
  )
}
    return (
      <div>
        <Header />
        <TransitionGroup>
					<CSSTransition
						key={this.props.location.key}
						classNames="page"
						timeout={300}>
						<Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/staff/:staffId" component={StaffWithId} />
							<Route path="/departments/:deptId" component={StaffWithDept} />
							<Route
								path="/staff"
								component={() => (
									<StaffList
										staffsLoading={this.props.staffs.isLoading}
										onAddStaff={this.props.addStaff}
										staffs={this.props.staffs.staffs}
										onDeleteStaff={this.props.deleteStaff}
									/>
								)}
							/>
							<Route
								path="/salary"
								component={() => (
									<Salary salary={this.props.staffsSalary.staffsSalary} />
								)}
							/>
							<Route
								path="/departments"
								component={() => (
									<Department
										departments={this.props.departments.departments}
										staffs={this.props.staffs.staffs}
									/>
								)}
							/>
							<Redirect to="/home" />
						</Switch>
					</CSSTransition>
				</TransitionGroup>
        <Footer />
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));