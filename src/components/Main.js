import React, { Component } from "react";
import StaffList from "./StaffListComponent.js";
import StaffInfo from "./StaffInfo.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Home from "./Home.js";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import Salary from "./Salary.js";
import { handleSubmit, fetchStaffs, fetchDepartment, fetchSalary } from '../redux/ActionCreators';
import {DepartmentStaff} from "./DepartmentDetail.js";
import Department from "./Departments.js";

const mapStateToProps = state => {
  return {
   staffs: state.staffs,
   departments: state.departments,
   salary: state.salary,
  }
}
const mapDispatchToProps = (dispatch) => ({

  handleSubmit: (newStaff) => dispatch(handleSubmit(newStaff)),
  fetchStaffs: () => dispatch(fetchStaffs()),
  fetchDepartment: () => dispatch(fetchDepartment()),
  fetchSalary: () => dispatch(fetchSalary()),
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
      const staff = this.props.staffs.staffs.filter((staff) => staff.id === parseInt(match.params.staffId, 10))[0]
          if (staff) {
              return(
                  <StaffInfo staff={staff}
                      department = {this.props.departments.departments.find((department) => department.id === staff.departmentId)}
                  />
              );
          }
          return <div>Staff is deleted</div>;
      }
    const DepartmentWithID = ({match}) => {
      return (
          <DepartmentStaff 
              department={this.props.departments.departments.find((department) => department.id === match.params.departmentId)}
              staff={this.props.staffs.staffs.filter((staff) => staff.departmentId === match.params.departmentId)}
          />
      )
  }
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
              handleSubmit={this.props.newStaff}
              />
            )}
          />

          <Route path="/staffList/:staffId" component={StaffWithID} />
          <Route exact path="/department" component={() => <Department departments={this.props.departments} />} />
          <Route path="/department/:departmentId" component={DepartmentWithID} />
          <Route path="/salary" component={() => <Salary staffs={this.props.staffs} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));