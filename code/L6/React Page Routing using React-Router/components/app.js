import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// Components
import HomePage from './home/home-page';
import MoviesPage from './movies/movies-page';
import ContactPage from './contact/contact-page';


//ES6 Const
const app = document.getElementById('root');

ReactDOM.render((
    <Router history={browserHistory}>
			<Route path="/" component={HomePage}>
				<Route path="/movies" component={MoviesPage}/>
				<Route path="/contact" component={ContactPage}/>
			</Route>
	</Router>
),app);