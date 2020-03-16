import React, {Component} from "react";



export default class Header extends Component{
    render(){
        return(
        <header className=".navbar-brand .navbar-expand-sm .navbar-expand-md .navbar-expand-lg .navbar-expand-xl">
            
            {/* <!-- Image and text --> */}
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                <img src="../data/pics/eye-icon.png" className="d-inline-block align-top" alt="eye-icon"/>
                Bootstrap
                </a>    
            </nav>
           
        </header>
        )
    }
}
