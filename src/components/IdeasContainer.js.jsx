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

  handleDelete = (id) => {
    this.props.dispatch({
      type: 'DESTROY_IDEA',
      id: id
    })
  }

  render() {
    return (
      <Ideas ideas={ this.props.ideas }
             handleDelete={ this.handleDelete }
      />
    )
  }
}

function mapStateToProps(state) {
  return { ideas: state.ideas }
}
export default connect(mapStateToProps)(IdeasContainer)
