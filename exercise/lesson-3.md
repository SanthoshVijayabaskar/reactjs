## Lesson 3: React Environment Using GULP Tooling

![gulpfile-setup](https://cloud.githubusercontent.com/assets/1716894/21743180/f871d3e6-d522-11e6-8027-a1008fcd87ad.png)

#### STEP 1: Initialize NPM to create 'package.json'
```
npm init
```
#### STEP 2: Install Packages using NPM Installation Command
```
npm install --g gulp
npm install --save react react-dom
npm install --save-dev gulp browserify babelify vinyl-source-stream babel-preset-es2015 babel-preset-react
```
#### STEP 3: Create 'gulpfile.js' in the root directory (Check Reference for Config File)

#### STEP 4: Create 'hello-world.jsx'
```javascript
import React from 'react';

class HelloWorld extends React.Component{

  render(){
	  return <h1>Hello from Gulp!</h1>
  }

}
export default HelloWorld;
```
#### STEP 5: Create 'app.jsx'
```javascript
import HelloWorld from './hello-world';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<HelloWorld/>,document.getElementById('root'));
```
#### STEP 6: Create 'index.html'
```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>ReactJS and ES6</title>
</head>
<body>
<div id="root"></div>
<script src="dist/bundle.js"></script>
</body>
</html>
```
#### STEP 7: Start the Gulp Task via Terminal
```
$gulp
```
#### STEP 8: Open the 'index.html' via browser

Reference
---------
[Gulpfile](https://gist.github.com/santhoshthepro/c12f9a3b725ca984303cddb1df25afc9)
