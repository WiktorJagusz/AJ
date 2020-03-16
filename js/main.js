import React, {Component} from "react";

import Gallery from './Gallery';
import Jumbotron from './Jumbotron';
import About from './About';
import Contact from './Contact';
import Api from './Api';



export default class Main extends Component{
    render(){
        console.log(Gallery)
        if (this.props.menuContent === "jumbotron") {
            return(
            <>
              <main>
                    <Jumbotron />
              </main>
            </>
            )

        } else if (this.props.menuContent === "gallery") {
            return(
                <>
                  <main>
                        <Gallery />
                  </main>
                </>
            )
        } else if (this.props.menuContent === "about") {
            return(
                <>
                  <main>
                        <About />
                  </main>
                </>
            )
        } else if (this.props.menuContent === "contact") {
            return(
                <>
                  <main>
                        <Contact />
                  </main>
                </>
            )
        } else if (this.props.menuContent === "api") {
            return(
                <>
                  <main>
                        <Api />
                  </main>
                </>
            )
        }
    }
}