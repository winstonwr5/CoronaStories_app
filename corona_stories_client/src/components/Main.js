import React from 'react'

class Main extends React.Component {
    state = {
        stories: []
    }

    fetchStories = async () => {
        let response = await fetch('http://localhost:3000/stories')
        let data = await response.json()
        console.log(data);
        this.setState({ stories: data })
    }
    handleCreate = async createData => {
        let response = await fetch('http://localhost:3000/stories', {
            body: JSON.stringify(createData),
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/json'
            }
        })
            let data = await response.json()
            this.props.handleView('home')
            this.setState(prevState => {
                return { stories: [...prevState.stories]}
            })
    }
}
