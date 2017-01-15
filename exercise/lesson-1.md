## Lesson 1: React JS 'Hello-World' using Plain JS

### Lesson Objectives

* Including React Support in the HTML
* Using **ReactDOM.reder()** method to mount the RAW HTML element under 'app'
* Use **React.createElement()** way of creating simple components/elements

### Code
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
### Source Code
https://github.com/santhoshthepro/react-js/tree/master/code/L1
