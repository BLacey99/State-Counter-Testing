import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Counter extends React.Component {
  state = {
    counter: 0,
    alpha: 0,
    beta: 0
  }
  increment = () => {
    this.setState({counter: this.state.counter+1});
    this.setState({alpha: this.state.alpha+ this.state.counter});
    this.setState({beta:  this.state.alpha + this.state.beta});
  }


  render() {
    return <div>
    <p>{this.state.counter}</p>
   

    <p>{this.state.alpha}</p>


    <p>{this.state.beta}</p>
    
    <button onClick={this.increment}>Increment</button>
    </div>;
  }
}

const el = <Counter />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);