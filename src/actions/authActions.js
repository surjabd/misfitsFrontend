import axios from "axios";



export function userLogin(callback) {

    return function(dispatch) {
        return  axios.post(

            "http://127.0.0.1:8000/login/", callback,
            {}).then(function (response) {

            dispatch({type:'GET_AUTH_TOKEN_SUCCESS', payload: response.data});
            return true;

        }).catch(function (error) {

            dispatch({type:'GET_AUTH_TOKEN_FAIL', payload:error.response});
            return false;
        });
    }

}

export function userRegister(callback) {

    return function(dispatch) {
        return  axios.post(

            "http://127.0.0.1:8000/users/", callback,
            {}).then(function (response) {

            dispatch({type:'USER_REGISTRATION_SUCCESS', payload: response.data})

        }).catch(function (error) {

            dispatch({type:'USER_REGISTRATION_FAIL', payload:error.response})
        });
    }

}