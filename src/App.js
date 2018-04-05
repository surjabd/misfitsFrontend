import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/LoginUser';
import RegisterUser from "./components/RegisterUser";
import DataDashboard from './components/DataDashboard';
import {Link,BrowserRouter,Route,Switch} from "react-router-dom";
import {connect} from "react-redux";
import {store} from "redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Reactive Dashboard</h1>
        </header>
          <BrowserRouter>
              <Switch>
                  <Route exact path='/' component={()=><Login />}/>
                  <Route path='/register' component={()=><RegisterUser />}/>
                  <Route path='/dashboard' component={()=><DataDashboard />}/>

              </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps(store) {
    return {
        authReducer: store.authReducer,
    }

}

const mapDispatchToState = (dispatch, ownProps) => {
    return {

    }
}



export default connect(mapStateToProps,mapDispatchToState)(App);
