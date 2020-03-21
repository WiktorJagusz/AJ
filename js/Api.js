import React, {Component} from "react";


export default class Api extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: false
        };
    }
    componentDidMount() {

        this.fetchComponent = fetch(`https://catfact.ninja/fact`,{
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'cors': 'no-cors'
              },
        })
        .then(response => response.json())
        .then(response => this.setState({text: response.fact}))
    }
    componentWillUnmount(){
        this.fetchComponent = false
    }
    render() {
    const {text} = this.state;
    return text ? <h1 className="goldText">{text}</h1> : <h1>Lołding...</h1>;
    }
}