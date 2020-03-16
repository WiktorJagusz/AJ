import React, {Component} from "react";
import ReactDOM from "react-dom";

import "../styles.scss"
import Header from './Header'
import Navigation from './Navigation'
import Main from './Main'
import Footer from './Footer'






class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            menuContent: "jumbotron",
        };
    }
    handleChangeMainContent = (event) => {
        this.setState({menuContent: event})
    }
    render(){
       return(
           <div className="container-fluid myContainer">
                <Header />
                <Navigation changeState = {this.handleChangeMainContent}/>
                <Main menuContent={this.state.menuContent}/>
                <Footer/>
           </div>
       ) 
    }
}


ReactDOM.render(<App />, document.getElementById("app"))