import React, { Component } from 'react';

class Idea extends Component {
  constructor() {
    super()
    this.state = {
      editable: false,
      title: '',
      body: ''
    }
  }

  updateTitle = (event) => {
    this.setState({ title: event.target.value })
  }

  updateBody = (event) => {
    this.setState({ body: event.target.value })
  }

  handleEdit = () => {
    if (this.state.editable) {
      let updatedIdea = {
        id: this.props.id,
        title: this.state.title || this.props.idea.title,
        body: this.state.body || this.props.idea.body
      }
      this.props.passUpdate.call(null, updatedIdea)
    }
    this.setState({ editable: !this.state.editable })
  }

  render() {
    const title = this.state.editable ? <input type='text' defaultValue={ this.props.idea.title } onChange={ this.updateTitle }/>
                                      : <p>{ this.props.idea.title }</p>

    const body = this.state.editable ? <input type='text' defaultValue={ this.props.idea.body } onChange={ this.updateBody }/>
                                     : <p>{ this.props.idea.body }</p>

    const editButtonText = this.state.editable ? 'Save'
                                               : 'Edit'
    return (
      <div className='idea'
           id={ this.props.id }
      >
        { title }
        { body }

        <button
          onClick={ this.handleEdit }
        >
          { editButtonText }
        </button>
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
