ReactJS Calendar Component
===================
> Following youtube tutorial [Build a ReactJS Calendar](https://www.youtube.com/watch?v=9U0uTNfY1UA).
>

ReactJS
-------------
>
>**Adding Local State to a Class**
>
>You can move state from *props* to state* in three steps:
>1. Replace ```this.props.date``` with ```this.state.date``` in the ```render()``` method:
>
>```
>class Clock extends React.Component {
>  render() {
>    return (
>      <div>
>        <h1>Hello, world!</h1>
>        <h2>It is {this.state.date.toLocaleTimeString()}.></h2>
>      </div>
>    );
>  }
>}
>
>```
>
>2. Add a ```class constructor``` that assigns the initial ```this.state```:
>
>```
>class Clock extends React.Component {
>  constructor(props) {
>    super(props);
>    this.state = {date: new Date()};
>  }
>
>  render() {
>    return (
>      <div>
>        <h1>Hello, world!</h1>
>        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
>      </div>
>    );
>  }
>}
>
>```
>
>Note how we pass ```props``` to the base constructor:
>```
>  constructor(props) {
>    super(props);
>    this.state = {date: new Date()};
>  }
>
>```
>
>Class components should always call the base constructor with ```props```.
>
>3. Remove the ```prop``` that was passed to the component, the result looks like this:
>
>```
>class Clock extends React.Component {
>  constructor(props) {
>    super(props);
>    this.state = {date: new Date()};
>  }
>
>  render() {
>    return (
>      <div>
>        <h1>Hello, world!</h1>
>        <h2>It is {this.state.date.toLocaleTimeString()}.></h2>
>      </div>
>    );
>  }
>}
>
>ReactDOM.render(
>  <Clock />,
>  document.getElementById('root')
>);
>```
>
>
>React documentation on [state and lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
>

javaScript
-------------
>
>**Constructor**
>
>The ```constructor``` method is a special method for creating and initializing an object created with a ```class```. There can only be one special method with the name "constructor" in a class. A ```SyntaxError``` will be thrown if the class contains more than one occurrence of a ```constructor``` method. A constructor can use the ```super``` keyword to call the constructor of the super class.
>
>Example:
>```
>lass Rectangle {
>  constructor(height, width) {
>    this.height = height;
>    this.width = width;
>  }
>  // Getter
>  get area() {
>    return this.calcArea();
>  }
>  // Method
>  calcArea() {
>    return this.height * this.width;
>  }
>}
>
>const square = new Rectangle(10, 10);
>
>console.log(square.area); // 100
>
>```
>
>MDN documentation on [Defining classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Constructor)
>
