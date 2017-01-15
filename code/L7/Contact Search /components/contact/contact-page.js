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
					search : ""

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
            		
            </div>
        )
    }
}
