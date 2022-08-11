import React, { Component } from 'react';
import StaffList from './StaffListComponent.js';
import StaffInfo from './StaffInfo.js';
import {STAFFS} from '../shared/staffs.jsx';
import Header from './Header.js';
import Footer from './Footer.js';
import Home from './Home.js';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        staffs: STAFFS,
    };
  }

  render() {
    const HomePage = () => {
      return(
          <Home/>
      );
    }
    const StaffWithID =({match})=>{
      return(
        <StaffInfo staff={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId,10))[0]} />
      )
    }
    return (
      <div>
        <Header/>
            <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/StaffList' component={() => <StaffList staffs={this.state.staffs} />} />
              <Route path='/StaffList/:staffId' component ={StaffWithID}/>             
              <Redirect to="/home" />
          </Switch>
          <Footer/>

      </div>
    );
  }
}

export default Main;