import React from 'react';
import { Button, Form, Responsive, Segment} from 'semantic-ui-react'
import axios from 'axios'
import history from './history'



class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: '',
			loading: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	

	handleChange(e){
		this.setState({[e.target.name]: e.target.value});
	}

	handleSubmit(e){
		this.setState({loading: true})
		e.preventDefault();
		var s = this;
		const body = {username: this.state.username, password: this.state.password};
		axios.post('https://logintes.herokuapp.com/login', body).then(function(result) {
		  localStorage.setItem("user", JSON.stringify(result.data));
		  s.setState({loading: false})
		  history.push('/dashboard')
		}).catch(function(err) {
			s.setState({loading: false})
			console.log(err);
		});
	}
	

	render() {

		return (
			<Segment.Group>
			<Responsive as={Segment}>			
			<Form onSubmit={this.handleSubmit}>
			<Form.Field>
			<label>User name</label>
			<input type="text" placeholder='Username' name="username" value={this.state.username} onChange={this.handleChange}/>
			</Form.Field>
			<Form.Field>
			<label>Password</label>
			<input type='password' name="password" placeholder='Password' value={this.state.password} onChange={this.handleChange} />
			</Form.Field>
			<Button disabled={this.state.loading} loading={this.state.loading} type='submit'>Submit</Button>
		
			</Form>
			</Responsive>
			</Segment.Group>
			);
	}
}

export default Login;
