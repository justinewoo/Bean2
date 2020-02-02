import React , {Component} from "react";
import { Redirect } from "react-router-dom";
import Items from "./Items"; 
import "../rooms.css";
import axios from "axios"
const querystring = require('querystring');


class Rooms extends Component {
    constructor(props){
        super(props);
        this.state = {
            items:[],
			count: 1,
			toVideo: false
        };
		this.addItem = this.addItem.bind(this);
	}
	componentDidMount() {
		console.log("hello")
		var self = this
		axios.get("http://45.79.228.167:8000/getallirooms")
			.then(function (response) {
				for (var i = 0; i < response["data"].length; i++) {
					// console.log(response["data"][i]["uniqueName"])
					self.state.items.push(self.addItem2(response["data"][i]["uniqueName"]))
				}
			})
	}
	
	_addRoom = () => {
		var self = this;
		const getRoomData = {
			roomName: self.state.key
		}
		axios.post("http://45.79.228.167:8000/addroom?", querystring.stringify(getRoomData))
			.then(function (response) {
				console.log("Room")
			})
	}

	_joinCall = (roomName) => {
		var self = this;
		console.log("HELLO" + roomName)
		localStorage.setItem("roomid", roomName)
		console.log(localStorage.getItem("roomid"))
		self.setState({toVideo:true})
	}

    addItem2(number){
        if (true){
            var newItem = {
                text: <div
 			className = "App-c"
		>
		<h1
			style = {{
				paddingLeft: 10
		}}
		>
			Room {number}</h1>
		<h1
			style = {{
				paddingLeft: 10,
				fontSize: 15
			}}
		>
			
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
				onClick={() => {this._joinCall(number)}}
			>Join Call</button>
		</div>
		

		</div>,
				key: Date.now()
				
            };
            this.setState((prevState)=>{
                
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }
        this.setState({
    		count: this.state.count + 1
    	});

        console.log(this.state.item);
    }

    addItem(e){
        if (true){
            var newItem = {
				key: Date.now(),

                text: <div
				
 			className = "App-c"
		>
		<h1
			style = {{
				paddingLeft: 10
		}}
		>
			Room {querystring.stringify(this.state.key)}</h1>
		<h1
			style = {{
				paddingLeft: 10,
				fontSize: 15
			}}
		>
			
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
				onClick={() => {this._joinCall(querystring.stringify(this.state.key))}}
			>Join Call</button>
		</div>
		

		</div>,
				
            };
            this.setState((prevState)=>{
                
                return {
                    items: prevState.items.concat(newItem)
                };
            });
            this._inputElement.value = "";
        }
        this.setState({
    		count: this.state.count + 1
    	});

        console.log(this.state.item);
        e.preventDefault();
		this._addRoom()	
    }

    render(){
		if(this.state.toVideo === true){
			return <Redirect to='/video'/>
		}
        return (
      <div className = "App-contact" >
      	
      	<div
      		className = "Rooms-header"

      	
      	>
      		<h1
			>
			"Rooms"</h1>
			<form onSubmit = {this.addItem}>
			<button
				style = {{ position: "absolute", marginLeft: 500, 
					}}
				type = "submit" onClick = {(a)=>this._inputElement = a} >Add Room</button>
			</form>
			<div style = {{marginTop: 10}}></div>
			<button
				style = {{ position: "absolute", marginLeft:-600, marginTop: 8}}
				>Documents </button>
      	</div>
      			<Items entries={this.state.items}/>

		
		

		

      </div>
      
        );
    }
}

export default Rooms;