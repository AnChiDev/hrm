import React, { Component } from "react";
import StaffList from "./StaffListComponent.js";
import StaffInfo from "./StaffInfo.js";
import { addStaff } from '../shared/redux/configureStore';
import Header from "./Header.js";
import Footer from "./Footer.js";
import Home from "./Home.js";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import Department from "./Departments.js";
import Salary from "./Salary.js";

const mapStateToProps = state => {
  return {
   staffs: state.staffs,
   departments: state.departments,
   role: state.role,
  }
}
const mapDispatchToProps = (dispatch) => ({
  addStaff: (newStaff) => dispatch(addStaff(newStaff))
})

class Main extends Component {
  
  render() {
    const HomePage = () => {
      return <Home />;
    };
    const StaffWithID = ({ match }) => {
      return (
        <StaffInfo
          staff={
            this.state.staffs.filter(
              (staff) => staff.id === parseInt(match.params.staffId, 10)
            )[0]
          }
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
                handleSubmit={this.props.addStaff}
              />
            )}
          />

          <Route path="/StaffList/:staffId" component={StaffWithID} />
          <Route
            exact
            path="/Department"
            component={() => (
              <Department departments={this.props.departments} />
            )}
          />
          <Route
            exact
            path="/Salary"
            component={() => <Salary staffs={this.props.staffs} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
