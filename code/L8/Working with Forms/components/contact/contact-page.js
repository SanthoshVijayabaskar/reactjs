import React from 'react';
import { Link } from 'react-router';
import ContactList from './contact-list';

export default class ContactPage extends React.Component{

	constructor(props){
		super(props);
		this.state = { 
				contacts :[
							{
								id: 1,
								name:'Joe',
							 	phone:'2345-2345'
							 },
							 {
							 	id: 2,
							 	name:'Krishna',
							 	phone:'900-100-200'

							 },
							 {
							 	id: 3,
							 	name:'Wasim',
							 	phone:'100-200-300'
							 }

					],
					search : "",
					messages: []

				};
				this.updateSearch = this.updateSearch.bind(this);
	}

	PrintContacts(filteredContacts){
		return filteredContacts.map((contact) =>{
            			return <ContactList contact={contact} key={contact.id}/>
            		});
	}

	updateSearch(event){
		this.setState({search: event.target.value.substr(0,25)});
	}

	sendMessage(event){
		event.preventDefault();
	
		let email = this.refs.email.value;
		let msg = this.refs.msg.value;
		console.log(`${email} has sent a message: ${msg}`);

		this.setState({message: this.state.messages.push({email,msg})
						});
	}

    render(){

    	var divStyle = {
			marginLeft: '80px'
		}

    	let filteredContacts = this.state.contacts.filter(
    			(contact)=>{
    				return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    			}
    		);

        return (
            <div style={divStyle}>

	            <h4>Search Contact</h4>
		            {/* Controlled Inputs - We can use defaultValue = "Search Contact" */} 
		            <input type="text" 
		            	value={this.state.search}
		            	onChange={this.updateSearch}/>  

	           		 <br></br>
	            	
	            	{this.PrintContacts(filteredContacts)}
            	
            	<br></br><br></br>
            	<h4>Message Us</h4>
            		<form onSubmit={this.sendMessage.bind(this)}>
	            		<label htmlFor="email">Email </label>
	            			<input type="text" ref="email" id="email"/>
	            		<label htmlFor="msg">Message </label>
	            			<input type="text" ref="msg" id="msg"/>
	            		<button type="submit">Submit</button>
	            	</form>
	            
	            <br></br><br></br>
	            <h4>Message Archives</h4>
	            	{
	            		this.state.messages.map((message)=>{
	            			return <ul>{message.email} {message.msg}</ul>
	            		})
	            	}
            </div>
        )
    }
}
