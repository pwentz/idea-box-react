import Idea from './Idea.js.jsx'
import React, { Component } from 'react';

class Ideas extends Component {
  render() {
    let ideas = this.props.ideas.map((idea, index) => {
      return (
        <div>
          <Idea idea={ idea }
                removeIdea={ this.props.handleDelete }
                id={ index }
          />
        </div>
      )
    })

    return (
      <div>
        { ideas }
      </div>
    )
  }
}
export default Ideas;
