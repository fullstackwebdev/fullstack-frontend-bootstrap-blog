import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Blog from './components/Blog.js';
import './components/blog.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Router>
         <Route exact path="/" component={Blog} />
       </Router>
      </div>
    );
  }
}

export default App;
