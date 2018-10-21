import React from 'react'
import logo from './logo.svg'
import './App.css'
import Intro from './intro'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'Manny'
    }
  }

  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>{this.state.name}, welcome to React.</h2>
        </div>
        <Intro name={this.state.name} />
      </div>
    )
  }
}

export default App
