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

  render() {
    return (
      <Ideas ideas={ this.props.ideas }/>
    )
  }
}

function mapStateToProps(state) {
  return { ideas: state.ideas }
}
export default connect(mapStateToProps)(IdeasContainer)
