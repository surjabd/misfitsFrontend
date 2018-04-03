import React, { Component } from 'react';
import '../App.css';
import {connect} from "react-redux";
import {userLogin} from "../actions/authActions";
import {Link,BrowserRouter,Route,Switch} from "react-router-dom";
import $ from 'jquery';

class DataDashboard extends Component {
    constructor(props) {
        super(props);


        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(event){
        event.preventDefault();

        var data = new FormData();
        data.append('username', $('.username').val());
        data.append('password', $('.password').val());
        console.log(data);

        this.props.userLogin(data);
    }



    render() {
        return (
            <div className="login">
                We are now in Data Dashboard
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
        userLogin: (data) => dispatch(userLogin(data)),
    }
}



export default connect(mapStateToProps,mapDispatchToState)(DataDashboard);
