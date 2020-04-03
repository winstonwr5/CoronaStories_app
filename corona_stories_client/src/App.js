import React, { Component } from 'react'
import Main from './components/Main.js'
import './App.css';

class App extends Component {
    state = {
        view: {
            page: 'home',
            pageTitle: 'Connection in Uncertain Times'
        },
        formInputs: {
            name: null,
            body: null,
            id: null
        }
    }

    handleView = (view, post) => {
        let pageTitle = ''
        let formInputs = {
            name: '',
            body: '',
            id: null
        }

        switch(view){
            case 'home':
                pageTitle = 'Stay Connected'
                break
            case 'addStory':
                pageTitle = 'Say Something'
                break
            case 'editStory':
                pageTitle = 'Want to Change Something?'
                formInputs = {
                    name: story.name,
                    body: story.body,
                    id: story.id
                }
                break
            default:
                break
        }
        this.setState({
            view: {
                page: view,
                pageTitle: pageTitle
            },
            formInputs: formInputs
        })
    }
    render() {
        return (
            <div>
                <Header/>
                <div>
                    <Aside handleView={this.handleView} />
                    <Main view={this.state.view}
                    handleView={this.handleView}
                    formInputs={this.state.formInputs} />
                </div>
            </div>
        )
    }
}


export default App;
