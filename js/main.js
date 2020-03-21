import React, {Component} from "react";

import Gallery from './Gallery';
import Jumbotron from './Jumbotron';
import About from './About';
import Contact from './Contact';
import Api from './Api';



export default class Main extends Component{
    render(){
        if (this.props.menuContent === "jumbotron") {

            return(
            <>
              <main style={{display: 'block'}}>
                    <Jumbotron />
              </main>
            </>
            )

        } else if (this.props.menuContent === "gallery") {
            return(
                <>
                  <main style={{display: 'block'}}>
                        <Gallery />
                  </main>
                </>
            )
        } else if (this.props.menuContent === "about") {
            return(
                <>
                  <main style={{display: 'block'}}>
                        <About />
                  </main>
                </>
            )
        } else if (this.props.menuContent === "contact") {
            return(
                <>
                  <main style={{display: 'block'}}>
                        <Contact />
                  </main>
                </>
            )
        } else if (this.props.menuContent === "api") {
            return(
                <>
                  <main style={{display: 'block'}}>
                        <Api />
                  </main>
                </>
            )
        } else {
            return null
        }
    }
}