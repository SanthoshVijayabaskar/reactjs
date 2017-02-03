## Lesson 4: React Environment Using WebPack Tooling

![webpack](https://cloud.githubusercontent.com/assets/1716894/21743202/7d41f68c-d523-11e6-9700-77a1bf8d8c2d.png)

## Step-by-Step Workout

#### STEP 1: Initialize NPM to create 'package.json'
```
npm init
```

#### STEP 2: Install Packages using NPM Installation Command
```
npm install --save react react-dom
npm install babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0 webpack webpack-dev-server --save-dev
```

#### STEP 3: Create the build file 'webpack.config.js' in the root directory (Check Reference for config)

#### STEP 4: Create the Single Page 'index.html'
```html
<!DOCTYPE html>
<html>
<head>
	<title>React with WebPack Tooling</title>
</head>
<body>
	<div id="root"></div>
	<script src="bundle.js"></script>
</body>
</html>
```

#### STEP 5: Create the first component - 'hello-world.jsx'
```javascript
import React from 'react';

class HelloWorld extends React.Component{

	render(){
		return <h1>Welcome to WebPack!</h1>
	}
}

export default HelloWorld
```

#### STEP 6: Create 'app.jsx' (It holds the 'render' method to mount the component to HTML)
```javascript
import React from 'react'
import ReactDOM from 'react-dom'

import HelloWorld from './hello-world'

//ES6 Const Keyword
const root = document.getElementById("root")

ReactDOM.render(<HelloWorld/>,root)
```

#### STEP 7: In 'package.json' under 'scripts', add the following,
```
"start": "webpack-dev-server"
```

#### STEP 8: Run the Webpack via the Terminal
```
npm run start
```

## Source Code
https://github.com/santhoshthepro/react-js/tree/master/code/L4/Build-tooling-using-Webpack

## Reference
* [Webpack Config](https://gist.github.com/santhoshthepro/44653556270888883d4ad70026b2b57b)
* [Guide to Setup Webpack Tooling - Article Reference](https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel)
