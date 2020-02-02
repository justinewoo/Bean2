import React from "react";
import Sidebar from "react-sidebar";
import '../documents.css';

class Documents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
		<div>
      		<Sidebar
        		sidebar={
        		<div className = "Documents-contact">

      	
      				<div className = "Documents-header" >
      					<h1 style = {{ paddingRight: 20, paddingLeft: 20 }}>Documents</h1>

      				</div>
      			
      			<div><button style = {{color: "black", fontSize: 15, marginLeft: 10, marginTop: 5 }} >asdfasdf</button></div>
      			<div><button style = {{color: "black", fontSize: 15, marginLeft: 10, marginTop: 5 }} >asdfasdf</button></div>
      			<div><button style = {{color: "black", fontSize: 15, marginLeft: 10, marginTop: 5 }} >asdfasdf</button></div>
      			<div><button style = {{color: "black", fontSize: 15, marginLeft: 10, marginTop: 5 }} >asdfasdf</button></div>

      			</div>
      			}
        		open={this.state.sidebarOpen}
        		onSetOpen={this.onSetSidebarOpen}
        		styles={{ sidebar: { background: "white" } }}>
	
        		<button 
        			onClick={() => this.onSetSidebarOpen(true)}
        				>	
          			Documents
        		</button>
      		</Sidebar>
      	<div
      	className = "Documents-contact"
     	 >

      	
      	<div
      		className = "Documents-header"

      	
      	>
      		<h1
			>
			"Documents"</h1>

      	</div>
      	</div>
      	<div
      		style = {{
      			display: "flex",
      			justifyContent: "center",
      			width: 1300,
      			//backgroundColor: "blue"
      			}}
      			><h1 style = {{ paddingTop: 20,marginLeft: 220, marginTop: 20, justifyContent: "center", flex: 1,  alignItems: "center", display: "flex", fontSize: 20, width: 500}}>asdfasdAS;DLKFJSA KL;DFJLD K;ASFJLDASJFLDJASL;FDJS AL;FJDLASJF LKDASJKL;DS AJFKL;DJFL;KAJL ;SDKFJDLKASJFKL;ASJFL;DSAJFKLAJDLKSFASD;L FKJSDLF JASLDKFJfsasdfasdAS;DLKFJSA KL;DFJLD K;ASFJLDASJFLDJASL;FDJS AL;FJDLASJF LKDASJKL;DS AJFKL;DJFL;KAJL ;SDKFJDLKASJFKL;ASJFL;DSAJFKLAJDLKSFASD;L FKJSDLF JASLDKFJfsasdfasdAS;DLKFJSA KL;DFJLD K;ASFJLDASJFLDJASL;FDJS AL;FJDLASJF LKDASJKL;DS AJFKL;DJFL;KAJL ;SDKFJDLKASJFKL;ASJFL;DSAJFKLAJDLKSFASD;L FKJSDLF JASLDKFJfsasdfasdAS;DLKFJSA KL;DFJLD K;ASFJLDASJFLDJASL;FDJS AL;FJDLASJF LKDASJKL;DS AJFKL;DJFL;KAJL ;SDKFJDLKASJFKL;ASJFL;DSAJFKLAJDLKSFASD;L FKJSDLF JASLDKFJfs</h1></div>
      	</div> 
    );
  }
}

export default Documents;