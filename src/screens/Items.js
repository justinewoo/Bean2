import React, {Component} from "react";

class Items extends Component {
constructor (props){
    super(props);
    this.createTask = this.createTask.bind(this);
}


    createTask(item){

        return <div
                key = {item.key}>{item.text}</div>
            
        
    }


    render (){
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTask);

        return (
            <ul className = "theList">
            {listItems}
            </ul>
        );
    }
};

export default Items;