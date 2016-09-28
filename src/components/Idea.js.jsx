import React, { Component } from 'react';

class Idea extends Component {
  render() {
    return (
      <div className='idea'
           id={ this.props.id }
      >
        <p>{ this.props.idea.title }</p>
        <p>{ this.props.idea.body }</p>
        <button
          onClick={ this.props.removeIdea.bind(null, this.props.id) }
        >
          x
        </button>
      </div>
    )
  }
}

export default Idea;
