## Component Lifecycle

## Code
```javascript
	import React,{Component} from 'react';

export default class LifecycleComponent extends Component{

	constructor(props){
		super(props);
		this.state={
			title:'React Movies'
		}
		console.log("Constructor Called: Here you can initialize State");
	}

	componentWillMount(){
		console.log("componentWillMount Called before Mounting the Component: Here too we can initalize State");
	}

	componentDidMount(){
		console.log("componentDidMount Called after Mounting the Component: Here you can access the DOM!")
	}

	componentWillReceiveProps(){
		console.log("componentWillReceiveProps Called when Update Initiated (State or Props Change)");
	}

	shouldComponentUpdate(){
		console.log("shouldComponentUpdate Called before component update.");
	}

	componentWillUpdate(){
		console.log("componentWillUpdate Called before Update");
	}

	componentDidUpdate(){
		console.log("componentDidUpdate Called after Update");
	}

	componentWillUnMount(){
		console.log("componentWillUnMount Called before un-mounting the Component: Here you can perform clean up operation");
	}

	render(){
		console.log("Component Mounted...");
		return(
			<div>
				<h2>This is a Lifecycle Component</h2>
				<h3>Printing Tagline Props... {this.props.tagline}</h3>
			</div>
			);
	}

}

LifecycleComponent.defaultProps = {
		tagline: 'Free Unlimited Tickets...'
	}
```
## Source Code 
https://github.com/santhoshthepro/react-js/tree/master/code/L5

## Reference
https://facebook.github.io/react/docs/react-component.html
