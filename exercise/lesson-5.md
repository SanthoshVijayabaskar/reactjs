## Component Lifecycle

```javascript
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
```
## Source Code 
(https://github.com/santhoshthepro/react-js/tree/master/code/L5)

## Reference
https://facebook.github.io/react/docs/react-component.html
