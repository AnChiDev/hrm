import React, { Component } from "react";
import StaffList from "./StaffListComponent.js";
import StaffInfo from "./StaffInfo.js";
import { DEPARTMENTS, STAFFS } from "../shared/staffs.jsx";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Home from "./Home.js";
import { Switch, Route, Redirect } from "react-router-dom";
import Department from "./Departments.js";
import Salary from "./Salary.js";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS,
    };
  }
  handleSubmit = (newStaff) => {
    this.setState({ staffs: [...this.state.staffs, newStaff] });
  };
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
                staffs={this.state.staffs}
                handleSubmit={this.handleSubmit}
              />
            )}
          />

          <Route path="/StaffList/:staffId" component={StaffWithID} />
          <Route
            exact
            path="/Department"
            component={() => (
              <Department departments={this.state.departments} />
            )}
          />
          <Route
            exact
            path="/Salary"
            component={() => <Salary staffs={this.state.staffs} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
