import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../../redux/actions/counterAction';
import './Counter.scss';

class Counter extends Component {
  increment = () => this.props.increment();
  decrement = () => this.props.decrement();
  reset = () => this.props.reset();

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
        <button className="resetButton" onClick={this.reset}>
          reset
        </button>
      </div>
    );
  }
}


const mapStateToProps = state => ({ count: state.count });

const mapDispatchToProps = {
  increment,
  decrement,
  reset
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);