import NewIdea from './NewIdea.js.jsx'
import { connect } from 'react-redux'
import React, { Component } from 'react';

class NewIdeaContainer extends Component {
  constructor() {
    super()
    this.state = {
      currentTitle: '',
      currentBody: ''
    }
  }

  handleTitle = (event) => {
    this.setState({ currentTitle: event.target.value })
  }

  handleBody = (event) => {
    this.setState({ currentBody: event.target.value })
  }

  handleNewIdea = () => {
    this.props.dispatch({
      type: 'ADD_IDEA',
      data: { id: new Date().valueOf(),
              title: this.state.currentTitle,
              body: this.state.currentBody }
    })
  }

  render() {
    return (
      <div>
        <NewIdea
          passTitle={ this.handleTitle }
          passBody={ this.handleBody }
          handleNewIdea={ this.handleNewIdea }
          currentTitle={ this.state.currentTitle }
          currentBody={ this.state.currentBody }
        />
      </div>
    )
  }
}

export default connect()(NewIdeaContainer)
