import React, { Component } from 'react';

class NewIdea extends Component {
  render() {
    return (
      <div className='NewIdea'>
        <input
          type='text'
          value={ this.props.currentTitle }
          onChange={ this.props.passTitle }
        />

        <br />

        <input
          type='text'
          value={ this.props.currentBody }
          onChange={ this.props.passBody } />
        <br />
        <button
          onClick={ this.props.handleNewIdea }
        >Click Me!</button>
      </div>
    )
  }
}

export default NewIdea;
