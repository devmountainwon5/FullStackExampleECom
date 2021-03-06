import React, { Component } from 'react';
import './login.css';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../redux/action_creators/action_creator';
import Register from './subview/register/register';
import httpRequest  from '../../shared/services/http_request'

class Login extends Component {
	state = {
		email: '',
		password: '',
		showRegister: false
	};
	login = () => {
		const loginObj = {
			email: this.state.email,
			password: this.state.password
		};
		httpRequest.post('/api/login', this.props, loginObj).then((data ) => {
			debugger
				this.props.setUser(data.user);
				this.props.history.push('/products');
		});
	};
	showRegister = () => {
		this.setState({
			showRegister: true
		});
	};
	register = registerObj => {
		httpRequest.post('/api/register', this.props, registerObj).then((data ) => {
				this.props.setUser(data.user);
				this.props.history.push('/products');
		});
	};

	handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
	render() {
		const register = this.state.showRegister ? <Register register={this.register} /> : '';
		return (
			<div className="login">
				{register}
				{this.state.showRegister ? (
					''
				) : (
					<div>
						<input
							type="text"
							placeholder="Email"
							name="email"
							value={this.state.email}
							onChange={this.handleChange}
						/>
						<input
							type="text"
							placeholder="Password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
						<button onClick={this.login}>login</button>
						<button onClick={this.showRegister}>register</button>
					</div>
				)}
			</div>
		);
	}
}

export default connect(state => state, actions)(Login);
