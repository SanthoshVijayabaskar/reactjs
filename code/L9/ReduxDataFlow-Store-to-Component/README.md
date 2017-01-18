# Redux - Data Flow PART 1: Store to Component

### STEP 1:

* Update the Dependency in Package.JSON an run npm install

### STEP 2: Inside App.js

* Import the createStore module from Redux and Create a Store.

```javascript
import {createStore} from 'redux';
const store = createStore();
```

### STEP 3: Create a folder 'reducers' - To hold all the reducers


### STEP 4: Create a new reducer js file 'reducer-movies.js'

### STEP 5: Inside reducer-movies.js --> Write the state / data
	
```javascript
export default function(){
	return[
		{key:'1', title: 'Kabali',desc:'Sample Movies',pic:'http://bit.do/movie-pic1'},
		{key:'2', title: 'Kabali 2',desc:'Sample Movies',pic:'http://bit.do/movie-pic1'},
		{key:'3', title: 'Kabali 3',desc:'Sample Movies',pic:'http://bit.do/movie-pic1'}

	]
}
```

### STEP 5: We need to pass Single big 
data source to store.. so we need to combine 
reducers..

Create a 'index.js' inside 'reducers' folder

```javascript

import {combineReducers} from 'redux';
import movieReducer from './reducer-movies';

const allReducers = combineReducers({
	movies: movieReducer
});

export default allReducers;

```

### STEP 6: Go to STEP 1 (app.js) and Edit the 'createStore'

Include reducer code 

```javascript
import allReducers from './reducers';
const store = createStore(allReducers);
```

### STEP 7: Go to app.js and include Provider & Change the ReactDOM.render as below

```
import {Provider} from 'react-redux';

ReactDOM.render(
	<Provider store={store}>
		<Router/>
	</Provider>, document.getElementById('app')
)
```

-$$$ Now Use Container Components to Connect to Redux Providers, Explain Container and Presentational Components$$$-


### STEP 8: Go to "movie-poster.js" container component 


```javascript
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
```

### STEP 9: create mapStateToProps() function within 'movie-poster.js'

//No One can call, {this.state} :: there is only {this.props}//

```javascript
function mapStateToProps(state){
	return{
		movies: state.movies
	};
}

export default connect(mapStateToProps)(MoviePoster);

```

### STEP 10: Comment the State variable in "movie-poster.js"
and change the map function to "this.props.movies" :)

### STEP 11: Completed the READ FloW (Store to Component) is DONE :)

