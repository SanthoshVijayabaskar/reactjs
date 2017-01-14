## Lesson 2: 'Movie Box' Widget

### Lesson Objectives

* Creating a 'MoviePoster' Component
* Use of 'constructor' method to Initialize State
* ES6 Destructuring of variables
* Use of Render method and return statement
* Event Handling in ReactJS
* Use of 'state' and 'props'

### Code
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

### Reference
[CSS](https://gist.github.com/santhoshthepro/f807b145be81d3c131160c9d62f3f003) | [External JS URL in CodePen](//cdnjs.cloudflare.com/ajax/libs/react/0.13.0/react.min.js)

### Note:
>
* `onClick={voteDown} -> Looks within render method`
* `onClick={this.voteDown} -> looks across component`
* `onClick={this.voteDown.bind(this)} -> Will Pass the Pros and State to the Function - Extending the Scope`

