import React, { Component } from 'react';
import NewIdeaContainer from './components/NewIdeaContainer.js.jsx'
import IdeasContainer from './components/IdeasContainer.js.jsx'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewIdeaContainer />
        <IdeasContainer />
      </div>
    );
  }
}
export default App;
