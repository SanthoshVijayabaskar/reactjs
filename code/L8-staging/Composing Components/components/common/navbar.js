import React, { Component } from 'react';
import {Link} from 'react-router';


export default class NavBar extends Component{

	render(){

		return(
				<div>

					<nav className="navbar navbar-default navbar-fixed-top">
					  <div className="container-fluid">
						    <div className="navbar-header">
						      <a className="navbar-brand" href="#">
						        <img alt="Brand" src="http://jsrocks.org/images/icon-logo-js.png"></img>
						      </a>
						    </div>
					   
						   <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
	      						<ul className="nav navbar-nav">
	      							<Link to="/" className="btn btn-default">{this.props.menuItem1} </Link>

						           <Link to="/movies" className="btn btn-default">{this.props.menuItem2}  </Link>

								   <Link to="/contact" className="btn btn-default">{this.props.menuItem3}</Link>
        						</ul>
						   </div>
					  </div>
					</nav>
			        
		        </div>
    		);
	}

}
