import React, { Component } from 'react';
import '../App.css';
import {connect} from "react-redux";
import {userLogin} from "../actions/authActions";
import {Link,BrowserRouter,Route,Switch,withRouter} from "react-router-dom";
import $ from 'jquery';
import {ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const chartdata = {
    device1:[
        {device_id : 'device1',x: 15, y: 30, z: 100},
        {device_id : 'device1',x: 30, y: 10, z: 100}
        ],
    device2:[
        {device_id : 'device2',x: 15, y: 30, z: 100}
        ],
    device3:[
        {device_id : 'device3',x: 30, y: 30, z: 100}
    ],
    device4:[
        {device_id : 'device4',x: 40, y: 40, z: 100}
    ],
    device5:[
        {device_id : 'device5',x: 50, y: 50, z: 100}
    ]


};



class DataDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myrender: '1'
        };

        this.sendSocketData = this.sendSocketData.bind(this);
        this.stopdata=this.stopdata.bind(this);
    }



    componentWillMount(){
        // console.log( this.props.authReducer)
        console.log(this.props.authReducer)
        this.props.authReducer.auth?null:this.props.history.push("/");
        console.log(chartdata)

    }

    sendSocketData(device){
        var socket = new WebSocket("ws://127.0.0.1:8000/ws/chat/test/");

        //Opens Socket
        socket.onopen = function () {
            console.log("alerting you");
            //Sending Socket data at intervals
            setInterval(() => {
                socket.send(JSON.stringify({
                    'message':'data from server',
                    'device_id':device,
                    'data_x':(Math.floor(Math.random() * 50) + 1),
                    'data_y':(Math.floor(Math.random() * 50) + 1),
                    'data_z':(Math.floor(Math.random() * 50) + 1)
                }));;
            }, 5000);
        };

        //Handles when a socket data is received
        socket.onmessage = function (event){
            var msg= JSON.parse(event.data);
            var datatemp = {
                "device_id" : msg.device_id,
                "x" : msg.data_x,
                "y" : msg.data_y,
                "z" : msg.data_z,
            };

            if(msg.device_id==device){
            chartdata[device].push(datatemp);
            console.log(chartdata);
            this.setState({
                myrender: device
            });
            }
        }.bind(this);


    }
    stopdata(){
        for (var i = 1; i < 99999; i++)
            window.clearInterval(i);
    }

    render() {
        return (
            <div className="databoard">
                We are now in Data Dashboard
                <ScatterChart classname="align-center" width={800} height={600} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                    <XAxis type="number" dataKey={'x'} name='x-axis'/>
                    <YAxis type="number" range={[1,50]}dataKey={'y'} name='y-axis'/>
                    <ZAxis type="number" dataKey={'z'} range={[100,500]} name='z-axis'/>
                    <CartesianGrid />
                    <Tooltip cursor={{strokeDasharray: '3 3'}}/>
                    <Legend />
                    <Scatter name='A' data={chartdata['device1']} fill='#8884d8' shape="star"/>
                    <Scatter name='B' data={chartdata['device2']} fill='#82ca9d' shape="triangle"/>
                    <Scatter name='C' data={chartdata['device3']} fill='#82as9d' shape="square"/>
                    <Scatter name='E' data={chartdata['device4']} fill='#82ec9d' shape="oval"/>
                    <Scatter name='F' data={chartdata['device5']} fill='#82os9d' shape="round"/>
                </ScatterChart>
                <div>
                    <button onClick={()=>{this.sendSocketData('device1')}}>Device 1</button>
                    <button onClick={()=>{this.sendSocketData('device2')}}>Device 2</button>
                    <button onClick={()=>{this.sendSocketData('device3')}}>Device 3</button>
                    <button onClick={()=>{this.sendSocketData('device4')}}>Device 4</button>
                    <button onClick={()=>{this.sendSocketData('device5')}}>Device 5</button>

                    <div>
                        <button onClick={this.stopdata}>STOP ALL DATA</button>
                    </div>
                </div>
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
