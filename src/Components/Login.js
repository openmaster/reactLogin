import React, { Component } from 'react';
import { Button, Form} from 'semantic-ui-react'

class Login extends Component {
	state = {username: '', Password:''}
	handleChange = (e, {name, value}) => this.setstate({[name]: value})

	handleSubmit = () => {

	}
	render() {
		return (
			<div className="container">
			
			<Form>
			<Form.Field>
			<label>User name</label>
			<input placeholder='Username' />
			</Form.Field>
			<Form.Field>
			<label>Password</label>
			<input placeholder='Password' />
			</Form.Field>
			<Button type='submit'>Submit</Button>
			</Form>
			
			</div>
			);
	}
}

export default Login;
