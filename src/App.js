import react, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header.js';
import StaffList from './components/StaffListComponent.js';
import {STAFFS} from './shared/staffs.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
   
    };
  }
  
  render(){
    return(
    <div className="App">
    
      <Header/>
   
      <StaffList staffs={this.state.staffs} className ={this.state.numberCol}/>
    </div>
    )
  };
}
export default App;
