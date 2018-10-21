import React from 'react'
import Header from './components/Header'
import Grid from './components/Grid'
import Form from './components/Form'

const styles = {
  textAlign: 'center',
  margin: 0,
  padding: 0,
  fontFamily: 'sans-serif'
}

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
      name: 'Manny',
      currentTitle: '',
      currentDetails: ''
    }
  }

  handleChange (event) {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      [name]: value
    })
  }

  handleSubmit (event) {
    alert(`Your note ${this.state.currentTitle} has been added!!!`)
    event.preventDefault()
  }

  render () {
    return (
      <div className={styles}>
        <Header name={this.state.name} />
        <Form
          currentTitle={this.state.currentTitle}
          currentDetails={this.state.currentDetails}
          handleChange={this.state.handleChange}
          handleSubmit={this.state.handleSubmit}
        />
        <Grid notes={this.state.notes} />
      </div>
    )
  }
}

export default App
