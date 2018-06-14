import React, { Component } from 'react';
import { Button, Form} from 'semantic-ui-react'
import axios from 'axios'

class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	
	handleChange(e){
		console.log(e);
		this.setState({[e.target.name]: e.target.value});
	}

	handleSubmit(e){
		console.log('hitting submit method');
		console.log(this.state);
		this.body = {username: this.state.username, password: this.state.password};
		axios.post('http://localhost:3200/login', this.body).then(function(result) {
			console.log(result);
		}).catch(function(err) {
			console.log(err);
		});
	}

	render() {
		return (
			<div className="container">
			
			<Form onSubmit={this.handleSubmit}>
			<Form.Field>
			<label>User name</label>
			<input type="text" placeholder='Username' name="username" value={this.state.username} onChange={this.handleChange}/>
			</Form.Field>
			<Form.Field>
			<label>Password</label>
			<input type='password' name="password" placeholder='Password' value={this.state.password} onChange={this.handleChange} />
			</Form.Field>
			<Button type='submit'>Submit</Button>
			</Form>
			</div>
			);
	}
}

export default Login;
