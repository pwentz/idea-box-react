import React, { Component } from 'react';

class Idea extends Component {
  constructor() {
    super()
    this.state = {
      editable: false
    }
  }

  // updateTitle = (event) => {
  //   this.setState({ title: event.target.value })
  // }

  // updateBody = (event) => {
  //   this.setState({ body: event.target.value })
  // }

  handleEdit = () => {
    // if (this.state.editable) {
    //   let updatedIdea = {
    //     id: this.props.idea.id,
    //     title: this.state.title || this.props.idea.title,
    //     body: this.state.body || this.props.idea.body
    //   }
    //   this.props.passUpdate.call(null, updatedIdea)
    // }
    this.setState({ editable: !this.state.editable })
  }

  render() {
    const title = this.state.editable ? <input type='text' defaultValue={ this.props.idea.title } onBlur={ this.handleEdit } onChange={ this.props.updateTitle.bind(null, this.props.idea.id) }/>
                                      : <p>{ this.props.idea.title }</p>

    const body = this.state.editable ? <input type='text' defaultValue={ this.props.idea.body } onChange={ this.props.updateBody.bind(null, this.props.idea.id) } onBlur={ this.handleEdit }/>
                                     : <p>{ this.props.idea.body }</p>

    const button = this.state.editable ? <div></div>
                                               : <button onClick={ this.handleEdit } >Edit</button>
    return (
      <div className='idea'
           id={ this.props.idea.id }
      >
        { title }
        <br />
        { body }
        <br />
        { button }
        <button
          onClick={ this.props.removeIdea.bind(null, this.props.idea.id) }
        >
          x
        </button>
      </div>
    )
  }
}

export default Idea;
