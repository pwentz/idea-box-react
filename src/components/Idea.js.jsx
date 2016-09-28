import React, { Component } from 'react';

class Idea extends Component {
  render() {
    return (
      <div>
        <p>{ this.props.title }</p>
        <p>{ this.props.body }</p>
      </div>
    )
  }
}

export default Idea;
