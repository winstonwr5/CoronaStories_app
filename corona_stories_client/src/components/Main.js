import React from 'react'
import Post from './Post.js'

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
                return { stories: [...prevState.stories, data]}
            })
    }

    handleUpdate = async updateData => {
        let response = await fetch(`http://localhost:3000/stories/${updateData.id}`, {
        body: JSON.stringify(updateData),
        method: 'PUT',
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    })
    let data = await response.json()
    this.props.handleView('home')
    this.fetchStories()
    }

    handleDelete = async id => {
        let response = await fetch(`http://localhost:3000/posts/${id}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json, text/plain, */*', 'Content-Type': 'application/json'
            }
        })
        this.setState(prevState => {
            const stories = prevState.stories.filter(story => story.id !== id)
            return { stories }
        })
    }

    componentDidMount() {
        this.fetchStories()
    }

    render () {
        return (
            <main>
                <h1>{this.props.view.pageTitle}</h1>
                {this.props.view.page === 'home' ?
                this.state.stories.map(story => (
                    <Post key={story.id} story={story}
                    handleView={this.props.handleView}
                    handleDelete={this.handleDelete}
                     />
                ))
            :
                <Form handleCreate={this.handleCreate}
                formInputs={this.props.formInputs}
                view={this.props.view}
                handleUpdate={this.handleUpdate}/>
                }
            </main>
        )
    }
}

export default Main
