import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookingCart extends Component{

	render(){

		var divStyle={
			float:'left'
		}
		if(!this.props.movies){
			return (<div><h5>Empty Cart...</h5></div>);
		}
		return(
			<div style={divStyle}>
				<h3>Booking Cart</h3>
				<h4>Tickets Booked Successfuly!</h4>
					<h5>Movie Title: {this.props.movies.title}</h5>
					<h5>Desc: {this.props.movies.desc}</h5>
					<img src={this.props.movies.pic} height="150" width="150"/>
			</div>
			);
	}
}

function mapStateToProps(state){
	return{
		movies: state.activeMovies
	};
}

export default connect(mapStateToProps)(BookingCart);
