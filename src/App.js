import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import List from './components/list/List';
import Header from './components/header/Header';

class App extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className="App">
        <Header>
        </Header>

        <main>
          <List doQuery={true}/>
        </main> 

      </div>
    );
  }
}

const mapStateToProps = store => {
  return ({

  })
}

export default connect(mapStateToProps)(App);
