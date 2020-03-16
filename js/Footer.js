import React, {Component} from "react";


export default class Navigation extends Component {
    render() {
        return(
            <footer>
                <div className="card-fluid">
                    <div className="card-header">
                        Quote
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                        </blockquote>
                    </div>
                </div>
            </footer>
        )
    }
}