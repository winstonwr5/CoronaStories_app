import React from 'react'


class Post extends React.Component {
    render () {
        return (
            <article>
                <div>
                    <h1>{this.props.story.name} wrote...</h1>
                </div>
                <div>{this.props.story.body}</div>
                <div>
                    <ul>
                        <li
                        onClick={() =>{
                            this.props.handleView('editStory', this.props.story)
                        }}
                        >edit story</li>
                        <li onClick={() =>
                        {this.props.handleDelete(this.props.story.id
                        )}}>delete post</li>
                    </ul>
                </div>
            </article>
        )
    }
}

export default Post
