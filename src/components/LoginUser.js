import React, { Component } from 'react';
import '../App.css';
import {connect} from "react-redux";
import {userLogin} from "../actions/authActions";
import {Link,withRouter} from "react-router-dom";
import $ from 'jquery';

class LoginUser extends Component {
    constructor(props) {
        super(props);


        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(event){
        event.preventDefault();

        var data = new FormData();
        data.append('username', $('.username').val());
        data.append('password', $('.password').val());


        this.props.userLogin(data).then(results=>{

                results==true?this.props.history.push("/dashboard"):null;

        }).catch(ex => {
                console.log("Failed LOGIN")
        });

    }



    render() {
        return (
            <div className="login">
                <form className="loginForm" onSubmit={this.handleLogin}>
                    <label>Username<input name="username" class="username"/></label>
                    <br/>
                    <label>Password<input type="password" name="password" class="password"/></label>
                    <br/>
                    <button type="submit">Signin</button>
                </form>
                <Link to="/register">SignUp</Link>
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



export default withRouter(connect(mapStateToProps,mapDispatchToState)(LoginUser));
