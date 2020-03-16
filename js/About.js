import React, {Component} from "react";


export default class About extends Component {
    render() {
        return(
            <>
            
            <div className="card" >
                <img style={{
                width: "17rem",
                height: "15rem"
                }} src="../data/pics/cuteKiten.jpg" className="card-img-top" alt="cute kitty"/>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            </>
        )
    }
}