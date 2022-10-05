import React, { Component } from 'react'
import Navbar from './Navbar';
import Contact from './Contact';
import Home from './Home';
import Feed from './Feed';
import { Routes, Route, BrowserRouter } from 'react-router-dom'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      user: {},
      name: 'Mason',
      age: 26
    }
  }
  
  addToAge = () => {
    this.setState({age: this.state.age += 1})
  }
  render() {
    return (
      <BrowserRouter>
        <div>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='contact' element={<Contact />}></Route>
            <Route path='/feed' element={<Feed />}></Route>          
          </Routes>
          {this.state.name}
          <br></br>
          {this.state.age}
          <br></br>
          <button onClick={this.addToAge}>Happy Birthday</button>
        </div>
      </BrowserRouter>
    )
  }
}

