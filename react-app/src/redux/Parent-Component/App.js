import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { connect } from 'react-redux'
import axios from 'axios'
import * as actions from '../Actions/actions'

class App extends Component {
  componentDidMount (props) {
    this.props.dispatch(actions.SampleFunction('some-data'))
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code> src / App.js </code> and save to reload.{' '}
          </p>{' '}
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React{' '}
          </a>{' '}
        </header>{' '}
      </div>
    ) // end Return
  } // end Render
} // end App

const mapStateToProps = state => {
  return { ...state }
}
export default connect(mapStateToProps)(App)
