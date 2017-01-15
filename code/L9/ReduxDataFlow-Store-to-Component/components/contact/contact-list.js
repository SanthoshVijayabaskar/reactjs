import React,{Component} from 'react';

export default class ContactList extends Component{

	render(){
		return(
			<ul>
				<li>{this.props.contact.name} {this.props.contact.phone}</li>
			</ul>
			);
	}
}