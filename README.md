# React JS 
* is an **Open Source library** (BSD License)
* for **'V'** in MVC
* developed by **Facebook**
* uses **'Component-Driven' architecture** (Web Components)
* uses **'Virtual DOM'** for Performance
* uses **'state'** and **'props'** for data flow
* uses **JSX Syntax**

# React JS Environment Setup

### Hardware Requirements:
* Minimum i5 Processor, 4GB RAM, Minimum 50 GB HDD
* Windows 7 Operating System

### Software Requirements:

Category | Package
-------- | -------
Browser | [Google Chrome](https://www.google.co.in/intl/en/chrome/browser/desktop/index.html), [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)
Environment | [NodeJS Latest](https://nodejs.org/en/)
Editors  | [SublimeText Editor](https://www.sublimetext.com/3), [WebStrom IDE Free Trail](https://www.jetbrains.com/webstorm/download/#section=windows-version)
Developer Tools | [Chrome React Developer Tools](https://github.com/facebook/react-devtools), [React Detector](https://github.com/kentcdodds/react-detector)
Version Control | [Git for Windows](https://git-scm.com/downloads)

# React JS Training Notes

## 2-way data binding (vs) 1-way data binding
![1way](https://cloud.githubusercontent.com/assets/1716894/21743240/3492ba1a-d524-11e6-991d-e01f0ba59fb0.png)

# React JS Lessons

## Lesson 1: React JS 'Hello-World' using Plain JS

>Lesson Objectives

* Including React Support in the HTML
* Using **ReactDOM.reder()** method to mount the RAW element in the HTML Mountpoint 'app'
* Use **React.createElement()** way of creating simple components/elements

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8"/>
		<title>React Hello World</title>
		<script src="https://fb.me/react-0.14.7.js"></script>
		<script src="https://fb.me/react-dom-0.14.7.js"></script>
	</head>
	<body>
		<div id="app"></div>
		<script>
			ReactDOM.render(
				React.createElement(
					'h1',	// tag
					null, //attributes passed to tag
					'Hello World!'
					),
				document.getElementById('app')
			);
		</script>
	</body>
	</html>
```

## Lesson 2: 'Movie Box' Widget

> Lesson Objectives

* Creating a 'MoviePoster' Component
* Use of 'constructor' method to Initialize State
* ES6 Destructuring of variables
* Use of Render method and return statement
* Event Handling in ReactJS
* Use of 'state' and 'props'

```javascript
  class MoviePoster extends React.Component {
  
  //new to ES6
  constructor(props){
    super(props);//Inherts the parent Obj Properties
    this.state ={
      rating: 0
    };
  }
  
  render() {
    var {title,lang,tags, pic} = this.props;
    var {rating} = this.state;
    return (<div className="movie-box">
            <h1>{title} | <span className="badge">{rating}</span></h1>
        
            <img src={pic}/>
            <h4>{lang}</h4>
            <h4>Tags: {tags}</h4>
            <span className="badge"><h6>{rating}</h6></span>
            <button onClick={this.voteDown.bind(this)}>Vote Down</button>
            <button onClick={this.voteUp.bind(this)}>Vote Up</button>
          </div>);
  }
  voteUp(){
    //console.log(this);
    this.state.rating ++;
    this.setState(this.state);
    
    //or the below style
    //this.setState({rating: this.state.rating ++});
  }
  voteDown(){
    //console.log(this);
    this.state.rating--;
    this.setState(this.state);
  }
}

//props
//state - determines the state of component, if this changes, the UI changes
React.render(<MoviePoster title="Captain America: Civil War" lang="English" tags={['Thriller ',' sci-fi ',' action']} pic="http://bit.ly/1qAkFMf"/>, document.getElementById('app'));

```

Reference
---------
[CSS](https://gist.github.com/santhoshthepro/f807b145be81d3c131160c9d62f3f003) 
[External JS URL in CodePen](//cdnjs.cloudflare.com/ajax/libs/react/0.13.0/react.min.js)

>Note:

* `onClick={voteDown} -> Looks within render method`
* `onClick={this.voteDown} -> looks across component`
* `onClick={this.voteDown.bind(this)} -> Will Pass the Pros and State to the Function - Extending the Scope`

## Lesson 3: React Environment Using GULP Tooling

![gulpfile-setup](https://cloud.githubusercontent.com/assets/1716894/21743180/f871d3e6-d522-11e6-8027-a1008fcd87ad.png)

>NPM Installation Commands:

```
npm install --g gulp
npm install --save react react-dom
npm install --save-dev gulp browserify babelify vinyl-source-stream babel-preset-es2015 babel-preset-react
```


Reference
---------
[Gulpfile](https://gist.github.com/santhoshthepro/c12f9a3b725ca984303cddb1df25afc9)

## Lesson 4: React Environment Using WebPack Tooling

![webpack](https://cloud.githubusercontent.com/assets/1716894/21743202/7d41f68c-d523-11e6-9700-77a1bf8d8c2d.png)

> NPM Installation Commands

```
npm install --save react react-dom
npm install babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0 webpack webpack-dev-server --save-dev
```

Reference
---------
[Webpack Config](https://gist.github.com/santhoshthepro/44653556270888883d4ad70026b2b57b)

## Lesson 5: ReactJS Simple Routing

>NPM Installation Commands

```
npm install --save react react-dom
npm install babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0 webpack webpack-dev-server --save-dev
```

### Reference
[Webpack Config](https://gist.github.com/santhoshthepro/44653556270888883d4ad70026b2b57b)| [Gulp with Webpack](https://gist.github.com/santhoshthepro/66c827cad2c808cc5f9ff6fab86cc396)
