import React, { Component } from "react";



export default class Navigation extends Component {
    render() {
        const menuClass = this.props.showBlock === "none" ? "menu-open" : "menu-closed"
        if (this.props.showBlock === "none") {
            return (<>
                <ul className={`nav justify-content-center ${menuClass}`} >
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={() => this.props.changeState("jumbotron")}>Strona główna</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={() => this.props.changeState("about")}>O mnie</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={() => this.props.changeState("gallery")}>Galeria</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={() => this.props.changeState("contact")}>Kontakt</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={() => this.props.changeState("api")}>Api</a>
                    </li>
                </ul>
            </>)
        } else {
            return (<>
                <div className={"closeX"}>
                    <button type="button" className="close" aria-label="Close" onClick={() => this.props.changeState('none')}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </>)
        }
        // return (
        //     <>
        //         <ul className={`nav justify-content-center ${menuClass}`} >
        //             <li className="nav-item">
        //                 <a className="nav-link" href="#" onClick={() => this.props.changeState("jumbotron")}>Strona główna</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="#" onClick={() => this.props.changeState("about")}>O mnie</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="#" onClick={() => this.props.changeState("gallery")}>Galeria</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="#" onClick={() => this.props.changeState("contact")}>Kontakt</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="#" onClick={() => this.props.changeState("api")}>Api</a>
        //             </li>
        //         </ul>


        //         <div className={"closeX"}>
        //             <button type="button" className="close" aria-label="Close" onClick={() => this.props.changeState('none')}>
        //                 <span aria-hidden="true">&times;</span>
        //             </button>
        //         </div>
        //     </>
        // )

    }
}