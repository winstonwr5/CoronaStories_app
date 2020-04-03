import React, { Component } from 'react'
import Main from './components/Main.js'
import './App.css';

import Header from './components/Header.js'
import Aside from './components/Aside.js'

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

    handleView = (view, story) => {
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
<<<<<<< HEAD
                    body: story.body,
                    id: story.id
=======
                    body: story.body
                    // id: story.id
>>>>>>> 4fdf6caa2e542dae6377aa38efca22fabca79877
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
