import Idea from './Idea.js.jsx'
import React, { Component } from 'react';

class Ideas extends Component {
  render() {
    let ideas = this.props.ideas.map((idea, index) => {
      return (
        <div>
          <Idea idea={ idea }
                removeIdea={ this.props.handleDelete }
                passUpdate={ this.props.updateIdea }
                updateBody={ this.props.updateBody }
                updateTitle={ this.props.updateTitle }
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
