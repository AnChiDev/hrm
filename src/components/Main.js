import React, { Component } from "react";
import StaffList from "./StaffListComponent.js";
import StaffInfo from "./StaffInfo.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Home from "./Home.js";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import Department from "./Departments.js";
import Salary from "./Salary.js";
import {
  postStaff,
  fetchStaffs,
  fetchDepartment,
  fetchSalary,
} from "../redux/ActionCreators";
import DepartmentDetail from "./DepartmentDetail.js";

const mapStateToProps = state => {
  return {
   staffs: state.staffs,
   departments: state.departments,
   salary: state.salary,
  }
}
const mapDispatchToProps = (dispatch) => ({

  fetchStaffs: () => {
    dispatch(fetchStaffs());
  },
  fetchDepartment: () => {
    dispatch(fetchDepartment());
  },
  fetchSalary: () => {
    dispatch(fetchSalary());
  },
  postStaff: (
    name,
    doB,
    salaryScale,
    startDate,
    departmentId,
    annualLeave,
    overTime
  ) =>
    dispatch(
      postStaff(
        name,
        doB,
        salaryScale,
        startDate,
        departmentId,
        annualLeave,
        overTime
      )
    ),
})


class Main extends Component {
  componentDidMount() {
    this.props.fetchStaffs();
    this.props.fetchDepartment();
    this.props.fetchSalary();
  }
 

  render() {
    const HomePage = () => {
      return <Home />;
    };
    const StaffWithID = ({ match }) => {
      return (
        <StaffInfo
        staff={
          this.props.staffs.staffs.filter(
            (staff) => staff.id === parseInt(match.params.staffId, 10)
          )[0]
        }
        department={this.props.department.department} 
        />
      );
    };
    const DepartmentWithId = ({ match }) => {
      return (
        <DepartmentDetail
          department={this.props.department.department.find(
            (department) => department.id === match.params.departmentId
          )}
          staffs={this.props.staffs.staffs}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/StaffList"
            component={() => (
              <StaffList
              staffs={this.props.staffs}
              isLoading={this.props.staffs.isLoading}
              errMess={this.props.staffs.errMess}
              postStaff={this.props.postStaff}
              />
            )}
          />

          <Route path="/StaffList/:staffId" component={StaffWithID} />
          <Route
            exact
            path="/Department"
            component={() => (
              <Department  staffs={this.props.staffs}
              department={this.props.department}
              isLoading={this.props.department.isLoading}
              errMess={this.props.department.errMess} />
            )}
          />
           <Route
                path="/department/:departmentId"
                component={DepartmentWithId}
              />
          <Route
            exact
            path="/Salary"
            component={() => <Salary    salary={this.props.salary}
            isLoading={this.props.salary.isLoading}
            errMess={this.props.salary.errMess} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
