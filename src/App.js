import React, { Component } from 'react';

import Scheduler from "./scheduler/Scheduler";
import Header from './header/Header';
import './App.css';
// import Scheduler from './scheduler/DayScheduler';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Scheduler />
      </>
    );
  }
}

export default App;
