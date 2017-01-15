import {combineReducers} from 'redux';
import movieReducer from './reducer-movies';

const allReducers = combineReducers({
	movies: movieReducer
});

export default allReducers;