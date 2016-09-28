import React, { Component } from 'react';
// import Idea from './Idea.js.jsx'

class Ideas extends Component {
  render() {
    let ideas = this.props.ideas.map( idea => {
      return (
        <div>
          <p>{ idea.title }</p>
          <p>{ idea.body }</p>
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
