import React, { Component } from 'react';
import '../App.css';
import {connect} from "react-redux";
import {userLogin} from "../actions/authActions";
import {Link,BrowserRouter,Route,Switch,withRouter} from "react-router-dom";
import $ from 'jquery';

class DataDashboard extends Component {
    constructor(props) {
        super(props);

        this.sendSocketData = this.sendSocketData.bind(this);
    }


    componentWillMount(){
        // console.log( this.props.authReducer)
        console.log(this.props.authReducer)
        this.props.authReducer.auth? this.sendSocketData():this.props.history.push("/");


    }

    sendSocketData(){
        var socket = new WebSocket("ws://127.0.0.1:8000/ws/chat/test/");
        socket.onopen = function () {
            console.log("alerting you");
            socket.send(JSON.stringify({'message':'Coming from Web'}));
            // socket.send({'message':'Coming from Web'});
            setInterval(() => {
                socket.send(JSON.stringify({'message':'Coming from Web'}));;
            }, 3000);
        };
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



export default withRouter(connect(mapStateToProps,mapDispatchToState)(DataDashboard));
