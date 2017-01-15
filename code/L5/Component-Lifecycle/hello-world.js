import React from 'react';
import LifecycleComponent from './lifecycle-component';

class HelloWorld extends React.Component{

	render(){
		return (<div>
					<h1>Welcome to Webpack!</h1>
					<LifecycleComponent/>
				</div>
				);
	}
}

export default HelloWorld