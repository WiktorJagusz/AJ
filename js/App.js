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
            showBlock: "none",
        };
    }
    handleChangeMainContent = (page) => {
        this.setState({menuContent: page, showBlock: page})
    }
    render(){
       return(
           <div className="container-fluid myContainer">
                <Header />
                <Navigation changeState = {this.handleChangeMainContent} showBlock={this.state.showBlock}/>
                <Main menuContent={this.state.menuContent} showBlock={this.state.showBlock}/>
                <Footer/>
           </div>
       ) 
    }
}


ReactDOM.render(<App />, document.getElementById("app"))