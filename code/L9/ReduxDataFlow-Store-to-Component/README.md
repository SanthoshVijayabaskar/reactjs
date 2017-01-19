# Redux - Part 1

## Store to Component

#### STEP 1: Install Redux Packages using NPM Install

```
npm install redux react-redux redux-logger

```

#### STEP 2: Create a Store in 'App.js' entry File

* Import the createStore module from Redux and Create a Store.

```javascript
import {createStore} from 'redux';
const store = createStore();
```

#### STEP 3: Create a folder 'reducers'& Create a new Reducer 'reducer-movie.js'

* This 'reducers' folder will hold all the independent reducers
* This Movie Reducer will hold all the data with respect to Movies. Here you model movie related data
* As metioned above, Write the state / data within this movie reducer
	
```javascript
export default function(){
	return[
		{key:'1', title: 'Kabali',desc:'Sample Movies',pic:'http://bit.do/movie-pic1'},
		{key:'2', title: 'Kabali 2',desc:'Sample Movies',pic:'http://bit.do/movie-pic1'},
		{key:'3', title: 'Kabali 3',desc:'Sample Movies',pic:'http://bit.do/movie-pic1'}

	]
}
```

#### STEP 4: Combine all Independent Reducers to Single Reducer Object

* Store is a Single Object, hence we need to combine all Independent Reducers to swap the Store
* Create a 'index.js' inside 'reducers' folder

```javascript

import {combineReducers} from 'redux';
import movieReducer from './reducer-movies';

const allReducers = combineReducers({
	movies: movieReducer
});

export default allReducers;

```

#### STEP 5: Pass the 'Combined Reducer' to the Store (In App.js)

* The Combined Reducer is supplied to 'createStore' method, which populates the Store

```javascript
import allReducers from './reducers';
const store = createStore(allReducers);
```

#### STEP 6: Go to app.js and include Provider & Change the ReactDOM.render as below

```
import {Provider} from 'react-redux';

ReactDOM.render(
	<Provider store={store}>
		<Router/>
	</Provider>, document.getElementById('app')
)
```

> NOTE: Now we have written Provider which allows data from Store to React. We need to connect the container components with Redux to accept the data.

	* Container Components / Smart Components - The Components which holds the State / data
	* Presentation Components / Dumb Components - The Components which gets all its data from parent components


#### STEP 7: Connect the 'Container Component' with Redux

* Go to "movie-poster.js" container component 

```javascript
import {connect} from 'react-redux';
```

#### STEP 8: create mapStateToProps() and connect() function within 'movie-poster.js'

* Since we mapped all the state to the container Component, we need to refer the data as {this.props} and not anymore as {this.state}
* Comment the State variable in "movie-poster.js" and change the map function to "this.props.movies" :)

```javascript
function mapStateToProps(state){
	return{
		movies: state.movies
	};
}

export default connect(mapStateToProps)(MoviePoster);

```

