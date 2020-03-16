import React, {Component} from "react";



export default class Navigation extends Component{
    render(){
        return(
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" href="#" onClick={()=>this.props.changeState("jumbotron")}>Strona główna</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={()=>this.props.changeState("about")}>O mnie</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={()=>this.props.changeState("gallery")}>Galeria</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#" onClick={()=>this.props.changeState("contact")}>Kontakt</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#" onClick={()=>this.props.changeState("api")}>Api</a>
                </li>
            </ul>
        )
    }
}