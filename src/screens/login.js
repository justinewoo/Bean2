import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import '../App.css';
import axios from "axios"


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: '', toRoom: false};

    this.handleChange = this.handleChange.bind(this);
    console.log("hello")
  }

  handleChange(event, key) {
    this.setState({[key]: event.target.value})
  }

  _getUser = () => {
      var self = this;
    //   console.log(querystring.stringify(getUserData))
	  axios.get("http://45.79.228.167:8000/login", {
          params: {
              username: self.state.username,
              password: self.state.password
          }
      })
		  .then(function (response)
		  {
			  if (response['data'] === ""){
                const getUsersData = {
                    username: self.state.username,
                    password: self.state.password 
              
                  }
                  const querystring = require('querystring');
                  console.log(querystring.stringify(getUsersData))
                  axios.post("http://45.79.228.167:8000/login?", querystring.stringify(getUsersData))
                    .then(function (response){
                        console.log("reee")
                         })
              }
              localStorage.setItem("userName", self.state.username)
              console.log(localStorage.getItem("userName"))
              self.setState({toRoom:true})
		  })
  }


  render() {
    if(this.state.toRoom === true){
        return <Redirect to='/rooms'/>
    }
    return (

      <div
      	className = "App-header"
      	>

      	
      	<div
      	
      		style = {{
      			display: "flex",
      			justifyContent: "center",
      			alignItems: "center",
      			height: 100
      		}}
      	>
      	
      		<h1
      		style = {{
      			paddingTop: 300,
      			paddingBottom: 400,
      		    fontFamily: 'Helvetica-Light',
      		    fontSize: 80,
      		    color: "white",
      		    height: 200,
			}}
			>
			"BEAN"</h1>
      	</div>
      		
      		
      	<div
      	    style = {{
      	  		paddingBottom: 20
      	  		}}
        >
       		<input
       			className = "App-username" 
       			style = {{
       			width: 350,
       			height: 20
       			}}
      			placeholder = "Username" 
            value = {this.state.username}
            onChange={event => this.handleChange(event, 'username')}
      		/>
      	
      	</div>
      	<div
      	    style={{
	          display: "flex",
	          justifyContent: "center",
	          alignItems: "center",
	          height: 10
        	}}
        >
      		<input 
      			className = "App-username"
      			style = {{
      			width: 350,
      			height: 20
      			}}
      			type = "password"
      			placeholder = "Password" 
            value = {this.state.password}
            onChange={event => this.handleChange(event, 'password')}
      		/>
      	
      	</div>
      	<div
      	      style={{
	          	display: "flex",
	          	justifyContent: "center",
	          	alignItems: "center",
	          	height: 100
        	}}
        >
        	<button 
        	style = {{
        		width: 250
        		}}
        	onClick={() => {this._getUser()}}
          >
        	Login</button>

        </div>

      </div>

    );
  }
}

export default Login;