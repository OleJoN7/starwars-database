import React from 'react';
import RequestDbService from '../../services/RequestDbService';
import {Link} from 'react-router-dom';
import './Signin.css'

const service = new RequestDbService();

class Signin extends React.Component {
    constructor() {
        super();
        this.state = {
            email:'',
            password:''
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        service.signIn(this.state.email,this.state.password)
        .then(data => {
            if(typeof data === 'object') {
                this.props.loadUser(data)
            }
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
            <div className="form-container">
                <form className="signin-form" onSubmit={this.onSubmit}>
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
                    <button className="btn-submit" type="submit">Sign In</button>
                </form>
                <button className="register-btn" type='button'><Link to="/register">Register</Link></button>
            </div>
        )
    }
}

export default Signin;