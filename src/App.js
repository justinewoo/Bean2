import React, { Component } from "react";
import './App.css';
import axios from "axios"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event, key) {
    this.setState({[key]: event.target.value})
  }


  _postUser = () => {
    var self = this;
    const getUsersData = {
      username: self.state.username,
      password: self.state.password 

    }

    

    const querystring = require('querystring');
    console.log(querystring.stringify(getUsersData))
    axios.post("http://45.79.228.167:8000/accounts?", querystring.stringify(getUsersData))
      .then(function (response){
		console.log(response)
        alert('Successfully created account')
      })


  }

  render() {
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
        	onClick={() => {this._postUser()}}
          >
        	Login</button>

        </div>

      </div>

    );
  }
}

export default App;