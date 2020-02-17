import React, { Component } from 'react';
import './Counter.scss';
import { connect } from 'react-redux';
class Counter extends Component {
  state = { count: 0 };

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ count: state.count });

export default connect(mapStateToProps)(Counter);