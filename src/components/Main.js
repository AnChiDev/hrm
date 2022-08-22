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
import { DEPARTMENTS, STAFFS } from "../shared/staffs.jsx";
import { handleSubmit } from "../shared/redux/ActionCreators.js";

const mapStateToProps = state => {
  return {
   staffs: state.staffs,
   departments: state.departments,
  }
}
const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (newStaff) => dispatch(handleSubmit(newStaff))
})


class Main extends Component {
  constructor(props){
    super(props);

    this.state={
      staffs:STAFFS,
      departments: DEPARTMENTS,
    };
     
  }
 handleSubmit = (newStaff) => {
    this.setState({staffs: [...this.state.staffs, newStaff]});
    // const currentStaffs = this.state.staffs;
    // this.setState({
    //   staffs: currentStaffs.concat([staff]),
    // });
    // localStorage.setItem("store", JSON.stringify(currentStaffs.concat([staff])));
    console.log(JSON.stringify([newStaff]))
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };
    const StaffWithID = ({ match }) => {
      return (
        <StaffInfo
          staff={
            this.props.staffs.filter(
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
                staffs={this.props.staffs}  handleSubmit={this.props.handleSubmit}
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
