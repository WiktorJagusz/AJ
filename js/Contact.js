import React, {Component} from "react";


export default class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            textarea: "",
        };
    }
    handleTextInput = (event) => this.setState({[event.target.name]: event.target.value});
    handleFormSend = event => {
        event.preventDefault();
        if (this.state.email.length < 3 || this.state.email.search('@')===false) {
            alert("Email powinien zawierac conajmniej 3 znaki i @.")
        } else if (this.state.textarea.length < 1 ) {
            alert('Brak wiadomości')
        } else {
            alert('Dziekujemy za wysłanie wiadomości');
            this.setState({email: "", textarea: ""})
        }

        

        const message = {
            mail: `${this.state.email}`,
            text: `${this.state.textarea}`
        }

        fetch('http://localhost:3000/messages/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(message)
            })
            .then(res=>res.json())
            .then(res => console.log(res));

    }

    render() {
        return(
            <>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={this.state.email} onChange={this.handleTextInput}/>
                    </div>
               
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="textarea" value={this.state.textarea} onChange={this.handleTextInput}></textarea>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Submit" onClick={this.handleFormSend}></input>
                </form>
            </>  
        )
    }
}