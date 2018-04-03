import React, { Component } from 'react';
import '../App.css';
import {userRegister} from "../actions/authActions";
import $ from "jquery";
import {connect} from "react-redux";

class RegisterUser extends Component {
    constructor(props) {
        super(props);


        this.handleRegister = this.handleRegister.bind(this);
    }

    handleRegister(event){
        event.preventDefault();

        var data = new FormData();
        data.append('email', $('.email').val());
        data.append('username', $('.name').val());
        data.append('password', $('.password').val());
        console.log(data);

        this.props.userRegister(data);
    }
    render() {
        return (
            <div className="register">
                <form onSubmit={this.handleRegister}>
                    <label>Email<input className="email"/></label>
                    <br/>
                    <label>Name<input className="name" /></label>
                    <br/>
                    <label>Password<input className="password" type="password"/></label>
                    <br/>
                    <button type="submit">Register</button>
                </form>

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
        userRegister: (data) => dispatch(userRegister(data)),
    }
}



export default connect(mapStateToProps,mapDispatchToState)(RegisterUser);