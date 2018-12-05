import React, { Component } from 'react';
import './App.css';
import List from './components/list/List';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {console.log('called from App', this.props.count)}
          {
            this.props.count.length
          }
        </header>
        <main>
          <List/>
        </main>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return ({
    count: store.app.selectedData
  })
}

export default connect(mapStateToProps)(App);
