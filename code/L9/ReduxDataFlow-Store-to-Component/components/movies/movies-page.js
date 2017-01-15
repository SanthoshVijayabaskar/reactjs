import React, { Component } from 'react';
import { Link } from 'react-router';
import MovieBox from './movie-box';

//P2:3 Importing Connect to bind to Redux
import {connect} from 'react-redux';

class MoviesPage extends Component{

	constructor(props){
		super(props);
		//P2:6 Comment the state and let's access it via Redux
		   /**
		   this.state ={
			 movies: [
			 	{key:'1', title: 'Kabali',desc:'Super Star Release',pic:'http://bit.do/movie-pic1'},
				{key:'2', title: 'Dangal',desc:'Amir Khan Special Release',pic:'http://bit.do/movie-pic2'},
				{key:'3', title: 'Star Wars',desc:'Next Episode',pic:'http://bit.do/movie-pic5'}
				 ]
			 }
			**/
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

		var movieItems = this.props.movies.map(function(movie){
			return <MovieBox key={movie.key} desc={movie.desc} title={movie.title} pic={movie.pic} handleBooking={this.handleBooking} handleReadMore={this.handleReadMore}/>
		}.bind(this));

		return (	<div>
						{/* <h2>This is a Movies Page</h2> */}
						{movieItems}
			   		</div>
			   );
	}
	

}

//P2:4 Write mapStateToProps
function mapStateToProps(state){
	return{
		movies: state.movies
	};
}

//P2:5 Connect the above component to Redux to make it Smart
export default connect(mapStateToProps)(MoviesPage);