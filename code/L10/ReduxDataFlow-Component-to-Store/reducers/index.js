import {combineReducers} from 'redux';
import movieReducer from './reducer-movies';
import activeMovieReducer from './reducer-active-movies';

const allReducers = combineReducers({
	movies: movieReducer,
	activeMovies: activeMovieReducer
});

export default allReducers;