import React, { Component } from 'react';
import { connect } from 'react-redux';
import Ideas from './Ideas.js.jsx';

class IdeasContainer extends Component {
  constructor() {
    super()
    this.state = {
      ideas: []
    }
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_IDEAS'
    })
  }

  handleDelete = (id) => {
    this.props.dispatch({
      type: 'DESTROY_IDEA',
      id: id
    })
  }

  handleUpdate = (updatedIdea) => {
    this.props.dispatch({
      type: 'UPDATE_IDEA',
      data: updatedIdea
    })
  }

  render() {
    return (
      <Ideas ideas={ this.props.ideas }
             handleDelete={ this.handleDelete }
             updateIdea={ this.handleUpdate }
      />
    )
  }
}

function mapStateToProps(state) {
  return { ideas: state.ideas }
}
export default connect(mapStateToProps)(IdeasContainer)
