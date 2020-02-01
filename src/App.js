import React, { Component } from "react";
import './App.css';

class App extends Component {
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
        	onClick={() => alert("Logged In")}>
        	Login</button>

        </div>

      </div>

    );
  }
}

export default App;