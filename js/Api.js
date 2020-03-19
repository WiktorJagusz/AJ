import React, {Component} from "react";


export default class Api extends Component {
    constructor(props) {
        super(props);
        this.state = {
            facts: false
        };
    }
    componentDidMount() {

        fetch(`https://jsonplaceholder.typicode.com/todos/${Math.floor(Math.random() * 100) + 1}`,{
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'cors': 'no-cors'
              },
        })
        .then(response => response.json())
        .then(response => this.setState({facts: response}))
    }
    render() {
        
        console.log(this.state.facts)
        const {facts} = this.state;
    return facts ? <h1>{facts.title}</h1> : <h2>Ładuje</h2>;
    }
}


// 