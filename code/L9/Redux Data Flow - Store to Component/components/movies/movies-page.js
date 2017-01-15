import React, { Component } from 'react';
import { Link } from 'react-router';
import MovieBox from './movie-box';

export default class MoviesPage extends Component{

	constructor(props){
		super(props);
		//Here is where you initialize state
		   this.state ={
			 movies: [
			 	{key:'1', title: 'Kabali',desc:'Super Star Release',pic:'http://bit.do/movie-pic1'},
				{key:'2', title: 'Dangal',desc:'Amir Khan Special Release',pic:'http://bit.do/movie-pic2'},
				{key:'3', title: 'Star Wars',desc:'Next Episode',pic:'http://bit.do/movie-pic5'}
				 ]
			 }
			 this.handleBooking = this.handleBooking.bind(this);
			 this.handleReadMore = this.handleReadMore.bind(this);
	}

	handleBooking(movie){
		console.log("Booking Received!");
		console.log("Title: "+ movie.movieTitle);
		console.log("Desc: "+ movie.desc);
	}

	handleReadMore(){
		console.log("Read More...");

	}

	render(){

		var movieItems = this.state.movies.map(function(movie){
			return <MovieBox key={movie.key} desc={movie.desc} title={movie.title} pic={movie.pic} handleBooking={this.handleBooking} handleReadMore={this.handleReadMore}/>
		}.bind(this));

		return (	<div>
						{/* <h2>This is a Movies Page</h2> */}
						{movieItems}
			   		</div>
			   );
	}
	

}