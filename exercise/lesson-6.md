## Lesson 6: React Page Routing using 'react-router'

NPM Installation Commands

```
npm install --save react react-dom
npm install babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0 webpack webpack-dev-server --save-dev
npm install react-router --save
```
## Code

```javascript
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
```

## Source Code
https://github.com/santhoshthepro/react-js/tree/master/code/L6

## Reference
[Webpack Config](https://gist.github.com/santhoshthepro/44653556270888883d4ad70026b2b57b) |  [Gulp with Webpack](https://gist.github.com/santhoshthepro/66c827cad2c808cc5f9ff6fab86cc396)
