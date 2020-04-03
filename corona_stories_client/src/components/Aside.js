import React from 'react'

class Aside extends React.Component {

  render () {
    return (
      <aside>
        <h1>NAVIGATE</h1>
          <ul>
            <li onClick={() => {this.props.handleView('home')}}>home</li>
            <li onClick={() => {this.props.handleView('addStory')}}>add story</li>
          </ul>
      </aside>
    )
  }
}

export default Aside
