import React from 'react';
import RequestDbService from '../../services/RequestDbService';
import './Register.css'

const service = new RequestDbService();

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            email:'',
            password:'',
            name:''
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        service.register(this.state.name,this.state.email,this.state.password)
        .then(data => {
            if(typeof data === 'object') {
                this.props.loadUser(data)
            }
        })
    }
    onNameChange = (e) => {
        this.setState({
            name:e.target.value
        })
    }
    onEmailChange = (e) => {
        this.setState({
            email:e.target.value
        })
    }
    onPasswordChange = (e) => {
        this.setState({
            password:e.target.value
        })
    }
    render() {
        return (
            <form className="register-form" onSubmit={this.onSubmit}>
               <input 
                    onChange={this.onNameChange} 
                    type="text" 
                    name="name" 
                    className="register-name"
                    placeholder="Your name" 
                />
                <input 
                    onChange={this.onEmailChange} 
                    type="email" 
                    name="email-address" 
                    className="email-address"
                    placeholder="Your email"  
                />
                <input 
                    onChange={this.onPasswordChange} 
                    type="password" 
                    name="password" 
                    className="password" 
                    placeholder="Your password" 
                />
                <button className="btn-submit" type="submit">Register</button>
            </form>
        )
    }
}

export default Register;