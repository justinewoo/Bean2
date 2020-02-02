import React , {Component} from "react";
import Items from "./Items"; 
import "../rooms.css";
class Rooms extends Component {
    constructor(props){
        super(props);
        this.state = {
            items:[],
            count: 1
        };
        this.addItem = this.addItem.bind(this);
    }

    addItem(e){
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
			Room {this.state.count}</h1>
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
		

		</div>,
                key: Date.now()
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

    }


    render(){
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