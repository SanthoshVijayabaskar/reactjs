import React, { Component } from 'react';
import { Link } from 'react-router';
import MovieBox from './movie-box';


import {connect} from 'react-redux';

//P3:1 Importing Actions
import {selectMovie} from '../../actions/index';
import {bindActionCreators} from 'redux';

class MoviesPage extends Component{

	constructor(props){
		super(props);
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

	createMovieList(){

		return this.props.movies.map(function(movie){
			return
				<MovieBox key={movie.key} desc={movie.desc} title={movie.title} pic={movie.pic} handleBooking={this.props.selectMovie}/>				
		}.bind(this));
	}

	render(){

		return (	<div>
						{/* <h2>This is a Movies Page</h2> */}
						{this.createMovieList}
			   		</div>
			   );
	}
	

}


function mapStateToProps(state){
	return{
		movies: state.movies
	};
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({selectMovie: selectMovie}, dispatch);

}

export default connect(mapStateToProps,matchDispatchToProps)(MoviesPage);