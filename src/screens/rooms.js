import React, { Component } from "react";
import '../rooms.css';

class Rooms extends Component {
  render() {
    return (

      <div
      	className = "App-contact"
      >

      	
      	<div
      		className = "Rooms-header"

      	
      	>
      		<h1
			>
			"Roasdfoms"</h1>
			<button
				style = {{ position: "absolute", marginLeft: 640
					}}
				>Add Room</button>
			<button
				style = {{ position: "absolute", marginLeft:-640 }}
				>Documents </button>
      	</div>
		
		<div
 			className = "App-c"
		>
		<h1
			style = {{
				paddingLeft: 10
		}}
		>
			Room 1</h1>
		<h1
			style = {{
				paddingLeft: 10,
				fontSize: 15
			}}
		>
			Entered Room: Archit Garg, Justine Pallas Woo, Krishnateja Avvari, Dominic Ong
			
		</h1>
		<div 
			style = {{
				display: "flex",
				justifyContent: "flex-end"
				}}
		>
			<button
				style= {{
				
					marginRight: 10,
					height: 30,
					marginBottom: 20
				}}
			>Join Call</button>
		</div>
		

		</div>
		<div
 			className = "App-c"
		>
		<h1
			style = {{
				paddingLeft: 10
		}}
		>
			Room 2</h1>
		<h1
			style = {{
				paddingLeft: 10,
				fontSize: 15
			}}
		>
			Entered Room: Archit Garg, Justine Pallas Woo, Krishnateja Avvari, Dominic Ong
			
		</h1>
		<div 
			style = {{
				display: "flex",
				justifyContent: "flex-end"
				}}
		>
			<button
				style= {{
				
					marginRight: 10,
					height: 30,
					marginBottom: 20
				}}
			>Join Call</button>
		</div>
		

		</div>

		

      </div>

    );
  }
}

export default Rooms;
