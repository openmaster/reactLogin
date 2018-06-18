import React, { Component } from 'react';
import history from './history'
import {Card, Icon, Image, Responsive, Segment, Item} from 'semantic-ui-react'
import axios from 'axios'

class Dashboard extends Component {
	constructor(props){
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			phoneNumber: '',
			addressLine: '',
			city: '',
			province: '',
			Zipcode: '',
			avator: ''
		};
		this.address = Object.assign({}, this.state.address)
	}

	componentWillMount() {
		const user = localStorage.getItem("user")
		if (!user) {
			history.push("/")
		} else {
			const user_obj = JSON.parse(user)
			this.setState({firstName: user_obj.firstName, lastName: user_obj.lastName, phoneNumber: user_obj.phoneNumber, addressLine: '34 St. paul street', city: 'St. Catharines', province: 'Ontaio', Zipcode: 'L2R 5D3'})
			
		}
	}
	logout() {
		axios.get('https://logintes.herokuapp.com/logout').then(function(result) {
		  localStorage.removeItem("user")
		  history.push("/")
		}).catch(function(err) {
			console.log(err);
		});
		
	}

	render() {
		return (
			<Segment.Group>
			<Responsive as={Segment} {...Responsive.onlyMobile}>	
			<Card>
			<Image src="https://react.semantic-ui.com/assets/images/avatar/large/daniel.jpg"/>
			<Card.Content>
			<Card.Header>{this.state.firstName} {this.state.lastName}</Card.Header>
			<Card.Meta>{this.state.phoneNumber}</Card.Meta>
			<Card.Description>{this.state.firstName} is Software developer living in </Card.Description>
			<Card.Description>{this.state.addressLine}</Card.Description>
			<Card.Description>{this.state.city}</Card.Description>
			<Card.Description>{this.state.Zipcode}</Card.Description>
			<Card.Description>{this.state.province}</Card.Description>
			</Card.Content>
			<Card.Content extra>
			<button className="btn btn-warning " onClick={this.logout}>Logout</button>
			</Card.Content>
			</Card>
			</Responsive>
			<Responsive as={Segment} minWidth={768}>
			 <Item.Group>
    			<Item>
      				<Item.Image size='tiny' src='https://react.semantic-ui.com/assets/images/avatar/large/daniel.jpg' />

      				<Item.Content>
        				<Item.Header>{this.state.firstName} {this.state.lastName} </Item.Header>
        				<Item.Meta>
          					<span className='price'>{this.state.phoneNumber}</span>
        				</Item.Meta>
        				<Item.Description>
        				<p>{this.state.addressLine}</p>
        				<p>{this.state.city}</p>
        				<p>{this.state.Zipcode}</p>
        				<p>{this.state.province}</p>
        				</Item.Description>

      				</Item.Content>
    			</Item>
    			</Item.Group>

			</Responsive>
			</Segment.Group>
			);
		}
	}

	export default Dashboard;
