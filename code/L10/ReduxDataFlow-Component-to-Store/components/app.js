import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// Components
import HomePage from './home/home-page';
import MoviesPage from './movies/movies-page';
import ContactPage from './contact/contact-page';

//P1:1 Importing Reducers
import allReducers from '../reducers/index';

//P1:2 Creating Stores
import {createStore} from 'redux';
const store = createStore(allReducers);

//P2:1 Importing Provider
import {Provider} from 'react-redux';


//ES6 Const
const app = document.getElementById('root');

ReactDOM.render((
	<Provider store={store}>
	    <Router history={browserHistory}>
				<Route path="/" component={HomePage}>
					<Route path="/movies" component={MoviesPage}/>
					<Route path="/contact" component={ContactPage}/>
				</Route>
		</Router>
	</Provider>
),app);