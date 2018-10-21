import React from 'react'
import './App.css'
import Header from './components/Header'
import Grid from './components/Grid'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      notes: [
        {
          id: 1,
          title: 'Add course notes',
          details: 'Need to add more details to the course'
        },
        {
          id: 2,
          title: 'Use unreal or unity',
          details: 'Need to add more details to the course'
        },
        {
          id: 3,
          title: 'List of gifts',
          details: 'Need to add more details to the course'
        }
      ],
      name: 'Manny'
    }
  }

  render () {
    return (
      <div className='App'>
        <Header name={this.state.name} />
        <Grid notes={this.state.notes} />
      </div>
    )
  }
}

export default App
