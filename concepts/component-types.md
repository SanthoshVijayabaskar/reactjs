# Container vs Presentational Components

#### Smart / Container Components
* Container Components are ones which either owns a State varible (In React JS) or receives the data from the Provider (In Redux). 
* Container Component are the ones which also holds some amount of UI logic and contains/calls other child components.

> Container Components are also called as Smart Components

#### Dumb / Presentational Components
* Presentational Components are ones which has plain HTML Markup and accepts data from parent component through {this.props}
* Presentational Components are ones which also dosen't perform any UI logic and stays more generic implementation

> Presentational Components are also called as Dumb Components

# Ways to Implement Components

![new-smart](https://cloud.githubusercontent.com/assets/1716894/22089916/5fe678d4-de14-11e6-84a6-d957dd80c862.png)

## Class Component (ES6 Way)

```javascript
class Welcome extends React.Component {
  
  constructor(props){
    super(props);
    this.setState = {
          name: 'Santhosh'
          }
    }
  
   printName(){
    console.log("Hello");
   }
 
 render() {
    return (<div>
              <h1>Hello, {this.state.name}</h1>
              <Couter name={this.state.name} handlePrint={this.printName.bind(this)}/>
           </div>)
    
  }
}

```

## Functional Component (Not Recommended)

```javascript
const FunctionalWelcome = () => (
 
  getInitialState : function(){
    return{
      this.state = {name: 'Santhosh'}
    }
  }
  
  render: function() {
    return (
      <div>
        Welcome {this.state.name}
      </div>
    );
  }
  
);
```

## Stateless Functional Component

```javascript
const Counter = ({name, handlePrint}) => (
  <a onClick={handlePrint}>
    <div>
    <h1>Hello, {name}</h1>
    </div>
  </a>
);
```

## Stateless Class Component

```javascript
class StatelessWelcome extends React.Component {
  
  constructor(props){
    super(props);
    }
 
 render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
