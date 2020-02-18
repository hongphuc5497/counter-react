import React, { Component } from 'react';
import { connect } from 'react-redux';
import { INCREMENT, DECREMENT, RESET } from '../../redux/actions/actionCounter';
import './Counter.scss';

class Counter extends Component {
  state = { count: 0 };

  increment = () => this.props.dispatch({ type: INCREMENT });
  decrement = () => this.props.dispatch({ type: DECREMENT });
  reset     = () => this.props.dispatch({ type: RESET });

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
        <button className="resetButton" onClick={this.reset}>reset</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({ count: state.count });

export default connect(mapStateToProps)(Counter);