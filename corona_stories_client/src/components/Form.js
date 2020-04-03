import React from 'react'

class Form extends React.Component {

  constructor() {
    super()
    this.state = {
      name: '',
      body: '',
      id: null
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.id] : e.target.value})
  }

  // handles submit
  handleSubmit = (e) => {
    e.preventDefault()
    if(this.props.view.page === 'addStory') {
        this.props.handleCreate(this.state)
    } else if (this.props.view.page === 'editStory') {
        this.props.handleUpdate(this.state)
    }
  }

  componentDidMount() {
    this.setState({
      name: this.props.formInputs.name,
      body: this.props.formInputs.body,
      id: this.props.formInputs.id
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          name
          <input type="text" placeholder="your name" id="name" value={this.state.name} onChange={this.handleChange}/>
        </label>
        <label id="story-form">
          story
          <textarea placeholder="Write your coronavirus story here" id="body" value={this.state.body} onChange={this.handleChange}></textarea>
        </label>
        <input type="submit" value="share"/>
      </form>
    )
  }
}

export default Form
